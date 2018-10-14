class InputHandler {
    constructor(idOfWatchedArea) {
        const elem = document.getElementById(idOfWatchedArea);

        const handleMouse = ({ offsetX, offsetY }) =>
            this.setPointerPosition([offsetX, offsetY]);
        const handleTouch = ({ touches }) =>
            this.setPointerPosition([touches[0].clientX, touches[0].clientY]);

        elem.addEventListener("mousemove", handleMouse);
        elem.addEventListener("touchmove", handleTouch);

        this.pointerPosition = [0, 0];
    }

    setPointerPosition(newPosition) {
        this.pointerPosition = newPosition;
    }
    get position() {
        return this.pointerPosition;
    }
}
