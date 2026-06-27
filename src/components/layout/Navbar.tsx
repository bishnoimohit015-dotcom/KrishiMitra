"use client";

import { Leaf, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui";

interface NavbarProps {
  onMenuClick?: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-30 flex items-center justify-between px-4 lg:px-6 py-3 bg-background border-b border-border">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden"
          onClick={onMenuClick}
          aria-label="Menu"
        >
          <Menu className="w-5 h-5" />
        </Button>
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <Leaf className="w-5 h-5 text-background" />
          </div>
          <span className="text-lg font-bold text-foreground">KrishiMitra AI</span>
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <Link href="/login">
          <Button variant="outline" size="sm">
            Login
          </Button>
        </Link>
        <Link href="/onboarding" className="hidden sm:block">
          <Button size="sm">Get Started</Button>
        </Link>
      </div>
    </nav>
  );
}
