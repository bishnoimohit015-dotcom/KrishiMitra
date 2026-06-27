"use client";

import { ReactNode } from "react";
import { Leaf } from "lucide-react";
import Link from "next/link";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export function AuthLayout({ children, title, description }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="p-4">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
            <Leaf className="w-6 h-6 text-background" />
          </div>
          <span className="text-xl font-bold text-foreground">KrishiMitra AI</span>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <div className="bg-background-card border border-border rounded-xl p-6 lg:p-8">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-foreground">{title}</h1>
              {description && (
                <p className="text-foreground-muted mt-2">{description}</p>
              )}
            </div>
            {children}
          </div>
        </div>
      </div>

      <footer className="py-4 text-center text-sm text-foreground-subtle">
        <p>© 2024 KrishiMitra AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
