import Level1 from "./public/assets/scenes/Level1.js";
import Preload from "./public/assets/scenes/Preload.js";

const config = {
  type: Phaser.AUTO,
  width: 1900,
  height: 1080,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 1900,
      height: 1080,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: true,
    },
  },
  // List of scenes to load
  // Only the first scene will be shown
  // Remember to import the scene before adding it to the list
  scene: [Preload, Level1]
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);
