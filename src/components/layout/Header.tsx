"use client";

import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui";
import { Input } from "@/components/ui";

interface HeaderProps {
  title?: string;
  showSearch?: boolean;
}

export function Header({ title, showSearch = true }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 px-4 lg:px-6 py-3 bg-background border-b border-border">
      <div className="flex items-center gap-4">
        {title && <h1 className="text-xl font-semibold text-foreground">{title}</h1>}
      </div>

      <div className="flex items-center gap-3 ml-auto">
        {showSearch && (
          <div className="hidden md:block w-64 lg:w-80">
            <Input
              placeholder="Search..."
              leftIcon={<Search className="w-4 h-4" />}
              inputSize="sm"
            />
          </div>
        )}

        <Button variant="ghost" size="sm" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
        </Button>

        <Button variant="ghost" size="sm" className="gap-2">
          <User className="w-5 h-5" />
          <span className="hidden lg:inline text-sm">Profile</span>
        </Button>
      </div>
    </header>
  );
}
