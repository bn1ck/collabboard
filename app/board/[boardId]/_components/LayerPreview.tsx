"use client";
import { LayerType } from "@/types/canvas";
import { useStorage } from "@liveblocks/react";
import React, { FC, memo } from "react";
import Rectangle from "./Rectangle";

interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;

  selectionColor: string;
}
const LayerPreview: FC<LayerPreviewProps> = memo(
  ({ id, onLayerPointerDown, selectionColor }) => {
    const layer = useStorage((root) => root.layers.get(id));
    
    if (!layer) {
      return null;
    }

    switch (layer.type) {
      case LayerType.Rectangle:
        return (
          <Rectangle
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      default:
        console.warn("unkown layer type");
    }
  }
);

export default LayerPreview;

LayerPreview.displayName = "LayerPreview";
