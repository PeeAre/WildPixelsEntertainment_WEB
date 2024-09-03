import React, { useEffect, useRef } from "react";
import CatSpriteSheet from "@images/cat-sprite-sheet.png";
import "./Hub_style";

const Hub = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const spriteSheet = new Image();
    spriteSheet.src = CatSpriteSheet;

    const frameWidth = 128;
    const frameHeight = 128;
    const displayWidth = 128;
    const displayHeight = 128;
    const numFrames = 4;
    let currentFrame = 0;

    const frameRate = 128;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const frameX = (currentFrame % numFrames) * frameWidth;
      const frameY = 0;

      ctx.drawImage(
        spriteSheet,
        frameX,
        frameY,
        frameWidth,
        frameHeight,
        0,
        0,
        displayWidth,
        displayHeight
      );

      currentFrame = (currentFrame + 1) % numFrames;
      setTimeout(animate, frameRate);
    };

    spriteSheet.onload = function () {
      animate();
    };
  }, []);

  return (
    <div className="hub-container">
      <h2>Hub page</h2>
      <canvas ref={canvasRef} width="128" height="128"></canvas>
    </div>
  );
};

export default Hub;
