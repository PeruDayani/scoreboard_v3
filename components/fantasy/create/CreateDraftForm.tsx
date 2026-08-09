'use client'

import CaptainsStep from '@/components/fantasy/create/CaptainsStep'
import DraftGamesStep from '@/components/fantasy/create/draft/DraftGamesStep'
import DraftNameStep from '@/components/fantasy/create/DraftNameStep'
import GamesStep, { MAX_GAMES } from '@/components/fantasy/create/GamesStep'
import StatisticsStep from '@/components/fantasy/create/StatisticsStep'
import Loading from '@/components/shared/Loading'
import {
  clearCreateDraftState,
  createEmptyDraftGame,
  INITIAL_CREATE_DRAFT_STATE,
  loadCreateDraftState,
  saveCreateDraftState,
  toFantasyDraftConfig,
  type CreateDraftState,
  type CreateDraftStep
} from '@/lib/fantasy/create-draft-storage'
import { FANTASY_STATISTIC_OPTIONS } from '@/lib/fantasy/fantasy.constants'
import type {
  DraftTeamKey,
  FantasyPlayer,
  FantasyStatisticOption
} from '@/lib/fantasy/fantasy.types'
import { slugify } from '@/lib/utils/slug'
import { useEffect, useState } from 'react'
import { FaArrowRotateLeft, FaFloppyDisk } from 'react-icons/fa6'

const TOTAL_STEPS = 5
const LAST_STEP = TOTAL_STEPS - 1

function canProceed (state: CreateDraftState): boolean {
  switch (state.step) {
    case 0:
      return state.name.trim().length > 0 && state.id.length > 0
    case 1:
      return (
        state.captains.teamA.trim().length > 0 &&
        state.captains.teamB.trim().length > 0
      )
    case 2:
      return state.statistics.length >= 3 && state.statistics.length % 2 === 1
    case 3: {
      const filled = state.games.map(game => game.gameId.trim()).filter(Boolean)
      if (filled.length === 0 || filled.length > MAX_GAMES) return false
      if (state.games.some(game => game.gameId.trim().length === 0)) {
        return false
      }
      return new Set(filled).size === filled.length
    }
    case 4:
      return true
    default:
      return false
  }
}

export default function CreateDraftForm () {
  const [state, setState] = useState<CreateDraftState>(
    INITIAL_CREATE_DRAFT_STATE
  )
  const [hydrated, setHydrated] = useState(false)
  const [copied, setCopied] = useState(false)
  const [confirmResetOpen, setConfirmResetOpen] = useState(false)

  useEffect(() => {
    setState(loadCreateDraftState())
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!copied) return
    const timeout = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(timeout)
  }, [copied])

  const nextEnabled = canProceed(state)
  const selectedStatKeys = state.statistics.map(stat => stat.key)

  function update (partial: Partial<CreateDraftState>) {
    setState(current => ({ ...current, ...partial }))
  }

  function handleSave () {
    saveCreateDraftState(state)
  }

  function handleReset () {
    clearCreateDraftState()
    setState(INITIAL_CREATE_DRAFT_STATE)
    setCopied(false)
    setConfirmResetOpen(false)
  }

  function handleNext () {
    if (!nextEnabled) return

    setState(current => {
      const nextStep = Math.min(current.step + 1, LAST_STEP) as CreateDraftStep
      const next = {
        ...current,
        step: current.step === LAST_STEP ? current.step : nextStep
      }
      saveCreateDraftState(next)
      return next
    })
  }

  function handleBack () {
    if (state.step === 0) return
    setState(current => ({
      ...current,
      step: (current.step - 1) as CreateDraftStep
    }))
  }

  function handleNameChange (name: string) {
    update({ name, id: slugify(name) })
  }

  function toggleStat (key: FantasyStatisticOption['key']) {
    setState(current => {
      const exists = current.statistics.some(stat => stat.key === key)
      if (exists) {
        return {
          ...current,
          statistics: current.statistics.filter(stat => stat.key !== key)
        }
      }

      const option = FANTASY_STATISTIC_OPTIONS.find(stat => stat.key === key)
      if (!option) return current

      return {
        ...current,
        statistics: [...current.statistics, option]
      }
    })
  }

  function handleGameIdChange (index: number, value: string) {
    setState(current => ({
      ...current,
      games: current.games.map((game, i) =>
        i === index ? { ...game, gameId: value } : game
      )
    }))
  }

  function handleAddGame () {
    setState(current => {
      if (current.games.length >= MAX_GAMES) return current
      return { ...current, games: [...current.games, createEmptyDraftGame()] }
    })
  }

  function handleRemoveGame (index: number) {
    setState(current => {
      if (current.games.length <= 1) return current
      return {
        ...current,
        games: current.games.filter((_, i) => i !== index)
      }
    })
  }

  function handleDraftPlayer (
    gameIndex: number,
    team: DraftTeamKey,
    player: FantasyPlayer
  ) {
    setState(current => ({
      ...current,
      games: current.games.map((game, index) => {
        if (index !== gameIndex) return game

        const alreadyDrafted = [
          ...game.teams.teamA,
          ...game.teams.teamB
        ].some(pick => pick.playerId === player.id)
        if (alreadyDrafted) return game

        const draftPick =
          game.teams.teamA.length + game.teams.teamB.length + 1

        return {
          ...game,
          teams: {
            ...game.teams,
            [team]: [
              ...game.teams[team],
              {
                playerId: player.id,
                playerName: player.name,
                teamId: player.teamId,
                teamName: player.teamName,
                draftPick
              }
            ]
          }
        }
      })
    }))
  }

  function handleUndraftPlayer (
    gameIndex: number,
    team: DraftTeamKey,
    playerId: number
  ) {
    setState(current => ({
      ...current,
      games: current.games.map((game, index) => {
        if (index !== gameIndex) return game

        return {
          ...game,
          teams: {
            ...game.teams,
            [team]: game.teams[team].filter(pick => pick.playerId !== playerId)
          }
        }
      })
    }))
  }

  async function handleExport () {
    const config = toFantasyDraftConfig(state)
    await navigator.clipboard.writeText(JSON.stringify(config, null, 2))
    setCopied(true)
  }

  if (!hydrated) {
    return <Loading />
  }

  return (
    <form
      className='mx-auto flex w-full flex-col gap-8 pb-10 text-left'
      onSubmit={event => {
        event.preventDefault()
        handleNext()
      }}
    >
      <div className='mx-auto flex w-full max-w-3xl items-center justify-between gap-3'>
        <div className='flex items-center gap-4'>
          <p className='text-xs text-muted'>
            Step {state.step + 1} of {TOTAL_STEPS}
          </p>
          <button
            type='button'
            onClick={handleSave}
            aria-label='Save draft'
            className='rounded-full p-2 text-muted transition-colors hover:bg-rose hover:text-terracotta'
          >
            <FaFloppyDisk className='size-4' />
          </button>
          <button
            type='button'
            onClick={() => setConfirmResetOpen(true)}
            aria-label='Reset draft'
            className='rounded-full p-2 text-muted transition-colors hover:bg-rose hover:text-terracotta'
          >
            <FaArrowRotateLeft className='size-4' />
          </button>
        </div>

        <div className='flex items-center gap-2'>
          <button
            type='button'
            onClick={handleBack}
            disabled={state.step === 0}
            className='mt-1 text-xs font-medium tracking-[0.2em] text-muted uppercase transition-colors hover:text-terracotta disabled:invisible'
          >
            Back
          </button>

          {state.step < LAST_STEP ? (
            <button
              type='submit'
              disabled={!nextEnabled}
              className='mt-0.5 rounded-md border border-terracotta bg-terracotta/20 px-4 py-2 text-xs font-medium tracking-[0.2em] text-foreground uppercase transition-colors hover:bg-terracotta/30 disabled:cursor-not-allowed disabled:border-border disabled:bg-rose disabled:text-muted'
            >
              Next
            </button>
          ) : (
            <button
              type='button'
              onClick={handleExport}
              className='mt-0.5 rounded-md border border-border bg-rose px-4 py-2 text-xs font-medium tracking-[0.2em] text-foreground uppercase transition-colors hover:border-terracotta hover:text-terracotta'
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          )}
        </div>
      </div>

      {state.step < LAST_STEP ? (
        <div className='mx-auto w-full max-w-3xl'>
          {state.step === 0 ? (
            <DraftNameStep
              name={state.name}
              id={state.id}
              onNameChange={handleNameChange}
            />
          ) : null}

          {state.step === 1 ? (
            <CaptainsStep
              captainA={state.captains.teamA}
              captainB={state.captains.teamB}
              onCaptainAChange={teamA =>
                update({ captains: { ...state.captains, teamA } })
              }
              onCaptainBChange={teamB =>
                update({ captains: { ...state.captains, teamB } })
              }
            />
          ) : null}

          {state.step === 2 ? (
            <StatisticsStep
              selectedStats={selectedStatKeys}
              onToggleStat={toggleStat}
            />
          ) : null}

          {state.step === 3 ? (
            <GamesStep
              gameIds={state.games.map(game => game.gameId)}
              onGameIdChange={handleGameIdChange}
              onAddGame={handleAddGame}
              onRemoveGame={handleRemoveGame}
            />
          ) : null}
        </div>
      ) : null}

      {state.step === 4 ? (
        <DraftGamesStep
          captains={state.captains}
          games={state.games}
          onDraftPlayer={handleDraftPlayer}
          onUndraftPlayer={handleUndraftPlayer}
        />
      ) : null}

      {confirmResetOpen ? (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 px-6'
          role='presentation'
          onClick={() => setConfirmResetOpen(false)}
        >
          <div
            role='dialog'
            aria-modal='true'
            aria-labelledby='reset-draft-title'
            className='w-full max-w-sm rounded-md border border-border bg-background p-6 text-center shadow-sm'
            onClick={event => event.stopPropagation()}
          >
            <p
              id='reset-draft-title'
              className='text-xs font-medium tracking-[0.2em] text-muted uppercase'
            >
              Reset draft?
            </p>
            <p className='mt-3 text-sm text-foreground'>
              This clears your saved progress and starts over.
            </p>
            <div className='mt-6 flex items-center justify-center gap-3'>
              <button
                type='button'
                onClick={() => setConfirmResetOpen(false)}
                className='rounded-md border border-border bg-rose px-4 py-2 text-xs font-medium tracking-[0.2em] text-foreground uppercase transition-colors hover:border-terracotta hover:text-terracotta'
              >
                Cancel
              </button>
              <button
                type='button'
                onClick={handleReset}
                className='rounded-md border border-terracotta bg-terracotta/20 px-4 py-2 text-xs font-medium tracking-[0.2em] text-foreground uppercase transition-colors hover:bg-terracotta/30'
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </form>
  )
}
