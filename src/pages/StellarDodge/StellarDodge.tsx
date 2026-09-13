import { useEffect, useRef } from "react";
import * as Phaser from "phaser";
import { StellarDodgeScene } from './StellarDodgeScene';
import "./StellarDodge.css";

export default function StellarDodge() {
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const phaserInstanceRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (!gameContainerRef.current || phaserInstanceRef.current) return;

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 500,
      parent: gameContainerRef.current,
      backgroundColor: "#0B0914",
      physics: {
        default: "arcade",
        arcade: {
          gravity: { x: 0, y: 0 },
          debug: false,
        },
      },
      scene: [StellarDodgeScene],
    };

    phaserInstanceRef.current = new Phaser.Game(config);

    return () => {
      if (phaserInstanceRef.current) {
        phaserInstanceRef.current.destroy(true);
        phaserInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="gamePageContainer">
      <div className="gameUiFrame">
        <h1 className="gameTitle">STELLAR DODGE</h1>
        <p className="gameControls">USE ARROW KEYS TO NAVIGATE THE ASTEROID FIELDS</p>
      </div>
      
      <div ref={gameContainerRef} className="canvasWrapper" />
    </div>
  );
}
