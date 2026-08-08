import Link from "next/link";

const projects = [
  {
    href: "/scoreboard",
    label: "Hidden Scoreboard",
    description: "NBA scores with spoilers kept under wraps.",
  },
  {
    href: "/fantasy",
    label: "Fantasy drafts",
    description: "Making the All-Star game matter.",
  },
] as const;

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center px-6 text-center">
      <div className="flex max-w-md flex-col items-center gap-10">
        <p className="text-base leading-relaxed text-zinc-500">
          Basketball-related projects, built for fun.
        </p>

        <ul className="flex w-full flex-col gap-6">
          {projects.map((project) => (
            <li key={project.href}>
              <Link
                href={project.href}
                className="group flex flex-col gap-1 transition-colors"
              >
                <span className="text-lg text-foreground underline-offset-4 group-hover:underline">
                  {project.label}
                </span>
                <span className="text-sm leading-relaxed text-zinc-500">
                  {project.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
