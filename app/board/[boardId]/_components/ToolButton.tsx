"use client";
import Hint from "@/components/Hint";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import React, { FC } from "react";

interface ToolButtonProps {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
}
const ToolButton: FC<ToolButtonProps> = ({
  label,
  icon: Icon,
  onClick,
  isActive,
  isDisabled,
}) => {
  return (
    <Hint label={label} side="right" sideOffset={14}>
      <Button
        disabled={isDisabled}
        onClick={onClick}
        size="icon"
        variant={isActive ? "boardActive" : "board"}
      >
        <Icon className="text-black" />
      </Button>
    </Hint>
  );
};

export default ToolButton;
