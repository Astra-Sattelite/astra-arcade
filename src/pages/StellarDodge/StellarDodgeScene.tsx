import * as Phaser from "phaser";

export class StellarDodgeScene extends Phaser.Scene {
  private player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private meteors!: Phaser.Physics.Arcade.Group;
  private score = 0;
  private scoreText!: Phaser.GameObjects.Text;
  private gameOver = false;
  private spawnTimer!: Phaser.Time.TimerEvent;

  constructor() {
    super("StellarDodgeScene");
  }

  preload() {}

  create() {
    this.gameOver = false;
    this.score = 0;

    const shipGraphics = this.add.graphics();
    shipGraphics.fillStyle(0x00f5d4, 1);
    shipGraphics.fillTriangle(0, 32, 32, 16, 0, 0);
    shipGraphics.generateTexture("ship", 32, 32);
    shipGraphics.destroy();

    const meteorGraphics = this.add.graphics();
    meteorGraphics.fillStyle(0xff007f, 1);
    meteorGraphics.fillCircle(10, 10, 10);
    meteorGraphics.generateTexture("meteor", 20, 20);
    meteorGraphics.destroy();

    this.player = this.physics.add.sprite(100, 250, "ship");
    this.player.setCollideWorldBounds(true);

    if (this.input.keyboard) {
      this.cursors = this.input.keyboard.createCursorKeys();
    }

    this.meteors = this.physics.add.group();

    this.scoreText = this.add.text(20, 20, "SCORE: 0", {
      fontSize: "20px",
      fontFamily: "monospace",
      fontStyle: "bold",
      color: "#f4f1de",
    });

    this.spawnTimer = this.time.addEvent({
      delay: 1000,
      callback: this.spawnMeteor,
      callbackScope: this,
      loop: true,
    });

    this.physics.add.overlap(this.player, this.meteors, this.hitMeteor, undefined, this);
  }

  update() {
    if (this.gameOver) return;

    const playerSpeed = 300;

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-playerSpeed);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(playerSpeed);
    } else {
      this.player.setVelocityY(0);
    }

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-playerSpeed);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(playerSpeed);
    } else {
      this.player.setVelocityX(0);
    }

    this.meteors.getChildren().forEach((meteor: any) => {
      if (meteor.x < -20) {
        meteor.destroy();
        this.score += 10;
        this.scoreText.setText("SCORE: " + this.score);
      }
    });
  }

  private spawnMeteor() {
    if (this.gameOver) return;

    const randomY = Phaser.Math.Between(20, 480);
    const meteor = this.meteors.create(850, randomY, "meteor");

    const speed = Phaser.Math.Between(-400, -200);
    meteor.setVelocityX(speed);

    meteor.setAngularVelocity(Phaser.Math.Between(-100, 100));
  }

  private hitMeteor(playerObject: any, meteorObject: any) {
    this.physics.pause();
    this.spawnTimer.destroy();

    playerObject.setTint(0xff0000);
    this.gameOver = true;

    this.add.text(400, 250, "GAME OVER", {
      fontSize: "48px",
      fontFamily: "monospace",
      fontStyle: "bold",
      color: "#ff007f",
    }).setOrigin(0.5);

    this.add.text(400, 310, "REFRESH PAGE TO RESTART", {
      fontSize: "16px",
      fontFamily: "monospace",
      color: "#f4f1de",
    }).setOrigin(0.5);
  }
}
