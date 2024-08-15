import React from "react";

const EmptyFavorites = () => {
  return (
    <div className="flex items-center justify-center h-full flex-col">
      <div className="text-2xl font-semibold">No favorie boards</div>
      <div className="text-sm text-muted-foreground mt-2">
        Try searching for something else
      </div>
    </div>
  );
};

export default EmptyFavorites;
