import { useState } from "react";
import {
  Boxes,
  Briefcase,
  Car,
  Check,
  ChevronDown,
  CookingPot,
  HeartPulse,
  LayoutGrid,
  PartyPopper,
  PawPrint,
  Shirt,
  Sprout,
  SprayCan,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { TASK_CATEGORIES } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Boxes,
  Briefcase,
  Car,
  CookingPot,
  HeartPulse,
  LayoutGrid,
  PartyPopper,
  PawPrint,
  Shirt,
  Sprout,
  SprayCan,
  Wrench,
};

export function TaskCategories() {
  const [open, setOpen] = useState<string[]>([]);

  const toggle = (slug: string) =>
    setOpen((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));

  return (
    <div className="mt-6 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {TASK_CATEGORIES.map((c) => {
        const Icon = ICONS[c.icon] ?? LayoutGrid;
        const isOpen = open.includes(c.slug);
        return (
          <article
            key={c.slug}
            className={cn(
              "overflow-hidden rounded-2xl border bg-card p-5 text-center transition-shadow",
              isOpen
                ? "border-primary/30 shadow-[var(--shadow-panel)]"
                : "border-border hover:shadow-[var(--shadow-panel)]",
            )}
          >
            <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h4 className="mt-3 text-sm font-semibold leading-snug">{c.name}</h4>
            <button
              type="button"
              onClick={() => toggle(c.slug)}
              aria-expanded={isOpen}
              className="mx-auto mt-1.5 flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              {c.tasks.length} tarefas
              <ChevronDown
                className={cn("h-3.5 w-3.5 transition-transform", isOpen && "rotate-180")}
              />
            </button>

            {isOpen && (
              <ul className="mt-4 space-y-3 border-t border-border pt-4 text-left text-sm">
                {c.tasks.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded bg-primary-soft text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        );
      })}
    </div>
  );
}
