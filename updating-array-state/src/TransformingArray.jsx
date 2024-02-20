import React, { useState } from "react";

let initialShapes = [
  { id: 0, type: "circle", x: 50, y: 100 },
  { id: 1, type: "square", x: 150, y: 100 },
  { id: 2, type: "circle", x: 200, y: 100 },
];
const TransformingArray = () => {
  const [shapes, setShapes] = useState(initialShapes);

  function handleShapes() {
    const nextShapes = shapes.map((shape) => {
      if (shape.type === "square") {
        return shape;
      } else {
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });

    setShapes(nextShapes);
  }

  return (
    <div>
      <button onClick={handleShapes}>Move Circle down!</button>

      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            background: "red",
            position: "absolute",
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === "circle" ? "50%" : " ",
            width: 20,
            height: 20,
          }}
        />
      ))}
    </div>
  );
};

export default TransformingArray;
