"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/fantasy", label: "Drafts" },
  { href: "/fantasy/create", label: "Create" },
] as const;

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="py-10">
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-display text-2xl tracking-tight text-foreground">
          Fantasy Drafts
        </h1>
        <nav className="flex items-center gap-4">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors hover:text-terracotta ${
                  isActive
                    ? "text-terracotta underline underline-offset-4"
                    : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
