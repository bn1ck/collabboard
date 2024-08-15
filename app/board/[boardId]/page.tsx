import React, { FC } from "react";
import Canvas from "./_components/Canvas";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage: FC<BoardIdPageProps> = ({ params }) => {
  return <Canvas boardId={params.boardId} />;
};

export default BoardIdPage;
