import React from "react";
import EmptySearch from "./EmptySearch";
import EmptyFavorites from "./EmptyFavorites";
import EmptyBoard from "./EmptyBoard";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

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
    return <div>Loading...</div>;
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

  return <div>Boardlist</div>;
};

export default Boardlist;
