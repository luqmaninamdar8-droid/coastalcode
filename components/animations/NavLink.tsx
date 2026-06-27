"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: string;
  className?: string;
  onClick?: () => void;
}

export default function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const letters = children.split("");

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group relative inline-flex overflow-hidden py-1 text-sm font-medium text-sand/80 transition-colors hover:text-sunset",
        className,
      )}
    >
      <span className="sr-only">{children}</span>
      <span aria-hidden="true" className="flex">
        {letters.map((letter, i) => (
          <motion.span
            key={`${letter}-${i}`}
            className="inline-block"
            initial={{ y: 0 }}
            whileHover={{ y: letter === " " ? 0 : -4 }}
            transition={{ delay: i * 0.02, type: "spring", stiffness: 400 }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </span>
    </Link>
  );
}
