"use client";
import Link from "next/link";
import React from "react";
import Overlay from "./Overlay";
import { useAuth } from "@clerk/nextjs";
import Footer from "./Footer";
import { formatDistanceToNow } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
interface BoardCardProps {
  id: string;
  title: string;
  imageUrl: string;
  authorId: string;
  authorName: string;
  createdAt: string;
  orgId: string;
  isFavorite: boolean;
}

export const BoardCard = ({
  id,
  title,
  imageUrl,
  authorId,
  authorName,
  createdAt,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
  });

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg overflow-hidden flex flex-col justify-between">
        <div className="relative flex-1 bg-amber-50">
          <h3 className="text-lg font-bold">{title}</h3>
          <Overlay />
        </div>
        <Footer
          isFavorite={isFavorite}
          authorLabel={authorLabel}
          title={title}
          createdAtLabel={createdAtLabel}
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127]  rounded-lg overflow-hidden  justify-between">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
