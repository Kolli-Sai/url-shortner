"use client";
import React from "react";

import { Switch } from "@nextui-org/switch";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [isSelected, setIsSelected] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isSelected) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [isSelected]);

  if (!mounted) return null;
  return (
    <Switch
      isSelected={isSelected}
      onValueChange={setIsSelected}
      defaultSelected
      size="md"
      color="primary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    ></Switch>
  );
}
