import CanvasSpec from "./CanvasSpec";

export default class ApplicationRunner {

    private canvasElement: any;
    private canvasContext: any;

    constructor() {
        this.canvasElement = this.createCanvas();
        this.canvasContext = this.canvasElement.getContext("2d");

    }

    public start(): void{
        this.drawBackground();
    }

    private drawBackground(): void {
        this.canvasContext.rect(0, 0, CanvasSpec.CANVAS_WIDTH, CanvasSpec.CANVAS_HEIGHT);
        this.canvasContext.fillStyle = CanvasSpec.CANVAS_BACKGROUND_COLOR;
        this.canvasContext.fill();
    }

    private createCanvas(): HTMLElement{
        const canvasElement = document.createElement("canvas");
        canvasElement.setAttribute("id", CanvasSpec.CANVAS_ID);
        canvasElement.setAttribute("width", `${CanvasSpec.CANVAS_WIDTH}`);
        canvasElement.setAttribute("height", `${CanvasSpec.CANVAS_HEIGHT}`);
        document.body.appendChild(canvasElement);
        return canvasElement;
    }
}

/**
 * Start the Application
 */

new ApplicationRunner().start();