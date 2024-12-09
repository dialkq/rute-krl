"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DarkTheme() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="hover:bg-transparent dark:hover:bg-stone-900 px-1 py-0 focus-visible:ring-0">
          <Sun className="h-5 w-5 md:h-5 md:w-5 rotate-0 scale-100 transition-all dark:-rotate-0 dark:scale-0 text-foreground/40 font-bold hover:text-foreground/90" />
          <Moon className="absolute h-4 w-4 md:h-5 md:w-5 text-foreground/40 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 hover:text-foreground/90" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="dark:bg-stone-900">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}