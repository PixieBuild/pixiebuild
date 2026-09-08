"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

export function NorviaSheet({
  open,
  onClose,
  compact,
  children,
}: {
  open: boolean;
  onClose: () => void;
  compact?: boolean;
  children: React.ReactNode;
}) {
  const still = useReducedMotion();
  const span = { duration: still ? 0 : 0.42, ease };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="sheet"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={span}
          className={cn(
            "absolute inset-0 z-30 flex",
            compact ? "flex-col justify-end" : "justify-end",
          )}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="bg-concept-scrim/45 absolute inset-0"
          />
          <motion.div
            initial={compact ? { y: "100%" } : { x: "100%" }}
            animate={{ x: 0, y: 0 }}
            exit={compact ? { y: "100%" } : { x: "100%" }}
            transition={span}
            className={cn(
              "bg-concept-canvas text-concept-ink shadow-elev-2 relative flex flex-col overflow-hidden",
              compact
                ? "max-h-[86%] w-full rounded-t-[1em]"
                : "border-concept-ink/10 h-full w-[38%] border-l",
            )}
          >
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
