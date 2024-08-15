"use client";

import React, { FC } from "react";
import Info from "./Info";
import Participants from "./Participants";
import Toolbar from "./Toolbar";

interface CanvasProps {
  boardId: string;
}

const Canvas: FC<CanvasProps> = ({ boardId }) => {
  return (
    <main className="w-full h-full relative bg-neutral-100 touch-none">
      <Info />
      <Participants />
      <Toolbar />
    </main>
  );
};

export default Canvas;
