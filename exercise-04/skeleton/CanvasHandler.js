class CanvasHandler {
    constructor(idOfCanvas) {
        this.canvas = document.getElementById(idOfCanvas);
        this.resize();

        const handleResize = () => this.resize();
        window.addEventListener("resize", handleResize);

        this.context = this.canvas.getContext("2d");
    }
    resize() {
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }
    fillCanvas(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    drawCircle([x, y], radius, color) {
        this.context.beginPath();
        this.context.arc(x, y, radius, 0, 2 * Math.PI, false);
        this.context.fillStyle = color;
        this.context.fill();
    }
    unitToPx(unit) {
        return unit * Math.sqrt(this.width * this.height);
    }
    get width() {
        return this.canvas.width;
    }
    get height() {
        return this.canvas.height;
    }
}
