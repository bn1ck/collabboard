import React from "react";
import EmptySearch from "./EmptySearch";
import EmptyFavorites from "./EmptyFavorites";
import EmptyBoard from "./EmptyBoard";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import NewBoardButton from "./NewBoardButton";
import { BoardCard } from "./boardCard";

interface BoardlistProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: boolean;
  };
}

const Boardlist: React.FC<BoardlistProps> = ({ orgId, query }) => {
  const data = useQuery(api.boards.get, { orgId });

  if (!data) {
    return (
      <div>
        <h2>{query.favorites ? "Favorite Boards" : "Team Boards"}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-8 pb-10">
          <NewBoardButton orgId={orgId} disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );
  }

  if (!data.length && query.search) {
    return <EmptySearch />;
  }

  if (!data.length && query.favorites) {
    return <EmptyFavorites />;
  }

  if (!data.length) {
    return <EmptyBoard />;
  }

  return (
    <div>
      <h2>{query.favorites ? "Favorite Boards" : "Team Boards"}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} />
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            createdAt={board.createdAt}
            authorId={board.authorId}
            authorName={board.authorName}
            orgId={board.orgId}
            isFavorite={board.isFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Boardlist;
