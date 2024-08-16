"use client";
import Hint from "@/components/Hint";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useQuery } from "convex/react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const TabSeparator = () => {
  return <div className="text-neutral-500 px-1.5" />;
};
interface InfoProps {
  boardId: string;
}
const Info: FC<InfoProps> = ({ boardId }) => {
  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  if (!data) return <InfoSkeleton />;

  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      <Hint label="Go to boards" side="bottom" sideOffset={10}>
        <Button asChild variant="board" className="px-2 ">
          <Link href="/">
            <Image src="/logo.svg" alt="Board Logo" height={40} width={40} />
            <span
              className={cn(
                "font-semibold text-xl ml-2 text-black",
                font.className
              )}
            >
              Board
            </span>
          </Link>
        </Button>
      </Hint>
      <TabSeparator />
      <Button variant="board" className="font-normal px-2">
        {data.title}
      </Button>
    </div>
  );
};

export default Info;

export const InfoSkeleton = () => {
  return (
    <div className="absolute top-2 left-2 bg-white w-[300px] rounded-md px-1.5 h-12 flex items-center shadow-md" />
  );
};
