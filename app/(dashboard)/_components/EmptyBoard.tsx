"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/useApiMutations";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const EmptyBoard = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization?.id,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created");
        router.push(`/board/${id}`);
      })
      .catch((error) => {
        toast.error("Failed to create board");
      });
  };

  return (
    <div className="flex items-center justify-center h-full flex-col">
      <div className="text-2xl font-semibold">No boards found</div>
      <div className="text-sm text-muted-foreground mt-2">
        Try searching for something else
      </div>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size="lg">
          Create a new board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoard;
