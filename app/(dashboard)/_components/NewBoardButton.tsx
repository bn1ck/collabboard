import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/useApiMutations";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { toast } from "sonner";
interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

const NewBoardButton: FC<NewBoardButtonProps> = ({ orgId, disabled }) => {
  const router = useRouter();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    mutate({
      orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created");
        router.push(`board/${id}`);
      })
      .catch(() => toast.error("Failed to create board"));
  };
  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
        (disabled || pending) &&
          "opacity-75 hover:bg-blue-600 cursor-not-allowed"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm text-white font-light">New Board</p>
    </button>
  );
};

export default NewBoardButton;
