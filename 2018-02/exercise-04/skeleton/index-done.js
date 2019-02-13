const enemySpawnFrequency = 2.5;

const canvasHandler = new CanvasHandler("canvas");
const inputHandler = new InputHandler("canvas");

let game;
function newGame() {
    canvasHandler.fillCanvas("black");
    game = new Game();
}

document.getElementById("startButton").addEventListener("click", newGame);

class Circle {
    constructor(position, color, velocity, target, size) {
        this.position = position;
        this.color = color;
        this.velocity = velocity;
        this.target = target;
        this.size = size;
    }
    move(deltaTime) {
        if (deltaTime > 0) {
            const maxDistance = this.velocity * deltaTime;
            const deltaPosition = subtract(this.target.position, this.position);

            this.position = add(this.position, limit(deltaPosition, maxDistance));
        }
    }
    draw(canvasHandler) {
        canvasHandler.drawCircle(this.position, this.size, this.color);
    }
    isTouching(other) {
        return magnitude(subtract(this.position, other.position)) < 2 * this.size;
    }
}

class Game {
    constructor() {
        this.player = new Circle(
            [0.5 * canvasHandler.width, 0.5 * canvasHandler.height],
            "#FFC07F",
            canvasHandler.unitToPx(0.0002),
            inputHandler,
            canvasHandler.unitToPx(0.01)
        );

        this.circleHolder = [this.player];
        this.spawnInterval = 1000 / enemySpawnFrequency;
        this.previousSpawn = this.previousTimestamp = 0;
        this.score = 0;

        this.menuBox = document.getElementById("menuBox").style;
        document.getElementById("startText").style.display = this.menuBox.display =
            "none";

        this.isActive = true;
        window.requestAnimationFrame(this.nextFrame.bind(this));
    }
    nextFrame(timestamp) {
        if (this.isActive) {
            canvasHandler.fillCanvas("rgba(165, 64, 45, 0.1)");
            this.spawnEnemyIfNeeded(timestamp);
            this.moveCircles(timestamp);
            window.requestAnimationFrame(this.nextFrame.bind(this));
        }
    }
    spawnEnemyIfNeeded(timestamp) {
        if (timestamp - this.previousSpawn > this.spawnInterval) {
            this.circleHolder.push(
                new Circle(
                    [
                        Math.random() > 0.5 ? -10 : 1.05 * canvasHandler.width,
                        Math.random() * canvasHandler.height
                    ],
                    "#F15156",
                    canvasHandler.unitToPx(0.0001),
                    this.player,
                    canvasHandler.unitToPx(0.01)
                )
            );

            this.previousSpawn = timestamp;
            this.score++;
        }
    }
    moveCircles(timestamp) {
        const deltaTime = this.getDeltaTime(timestamp);
        for (let i = 0; i < this.circleHolder.length; i++) {
            this.circleHolder[i].move(deltaTime);
            this.circleHolder[i].draw(canvasHandler);

            for (let j = i + 1; j < this.circleHolder.length; j++) {
                if (this.circleHolder[i].isTouching(this.circleHolder[j])) {
                    if (this.circleHolder[i] == this.player) this.showEndScreen();
                    else {
                        this.circleHolder.splice(i, 1);
                        this.circleHolder.splice(j - 1, 1);
                    }
                }
            }
        }
    }
    getDeltaTime(timestamp) {
        const tempPreviousTime = this.previousTime;
        this.previousTime = timestamp;
        return timestamp - tempPreviousTime;
    }
    showEndScreen() {
        document.getElementById("endText").style.display = "block";
        document.getElementById("endScore").innerHTML = `Pontszámod: ${this.score}`;
        this.menuBox.display = "flex";
        this.isActive = false;
    }
}
