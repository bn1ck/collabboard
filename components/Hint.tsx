import React, { FC } from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";

export interface HintProps {
  label: string;
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  align?: "start" | "end" | "center";
  sideOffset?: number;
  alignOffset?: number;
}
const Hint: FC<HintProps> = ({
  label,
  children,
  side,
  align,
  sideOffset,
  alignOffset,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className="text-white bg-black border-black"
          side={side}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          align={align}
        >
          <p className="font-semibold capitalize">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Hint;
