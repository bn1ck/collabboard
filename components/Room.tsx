"use client";
import React, { FC, ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react";

interface RoomProps {
  children: ReactNode;
  roomId: string;
  fallback: NonNullable<ReactNode> | null;
}
const Room: FC<RoomProps> = ({ children, roomId, fallback }) => {
  const liveblockKey = process.env.NEXT_PUBLIC_LIVEBLOCK_KEY!;
  return (
    <LiveblocksProvider publicApiKey={liveblockKey}>
      <RoomProvider id={roomId}>
        <ClientSideSuspense fallback={fallback}>{children}</ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
};

export default Room;
