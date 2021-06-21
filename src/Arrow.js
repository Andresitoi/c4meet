import React, { useRef, useEffect, useCallback } from "react";
import { Arrow as KonvaArrow, Transformer } from "react-konva";

import { LIMITS } from "./constants";
import { selectShape, transformArrowShape, moveShape } from "./state";

const boundBoxCallbackForArrow = (oldBox, newBox) => {
  // limit resize
  if (
    newBox.width < LIMITS.ARROW.MIN ||
    newBox.height < LIMITS.ARROW.MIN ||
    newBox.width > LIMITS.ARROW.MAX ||
    newBox.height > LIMITS.ARROW.MAX
  ) {
    return oldBox;
  }
  return newBox;
};

export function Arrow({ id, isSelected, type, ...shapeProps }) {
  const shapeRef = useRef();
  const transformerRef = useRef();

  useEffect(() => {
    if (isSelected) {
      transformerRef.current.nodes([shapeRef.current]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const handleSelect = useCallback(
    (event) => {
      event.cancelBubble = true;

      selectShape(id);
    },
    [id]
  );

  const handleDrag = useCallback(
    (event) => {
      moveShape(id, event);
    },
    [id]
  );

  const handleTransform = useCallback(
    (event) => {
      transformArrowShape(shapeRef.current, id, event);
    },
    [id]
  );

  return (
    <>
      <KonvaArrow
        onClick={handleSelect}
        onTap={handleSelect}
        onDragStart={handleSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={handleDrag}
        onTransformEnd={handleTransform}
      />
      {isSelected && (
        <Transformer
          anchorSize={5}
          borderDash={[6, 2]}
          ref={transformerRef}
          boundBoxFunc={boundBoxCallbackForArrow}
        />
      )}
    </>
  );
}
