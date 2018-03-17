import CanvasSpec from "../../../CanvasSpec";
import Engine from "../Engine";

export default class DrawEngine implements Engine {

    private canvasElement: any;
    private canvasContext: any;

    constructor() {
        this.canvasElement = DrawEngine.createCanvas();
        this.canvasContext = this.canvasElement.getContext("2d");
    }

    public execute(): void{
        this.drawBackground();
    }

    private drawBackground(): void {
        this.canvasContext.rect(0, 0, CanvasSpec.CANVAS_WIDTH, CanvasSpec.CANVAS_HEIGHT);
        this.canvasContext.fillStyle = CanvasSpec.CANVAS_BACKGROUND_COLOR;
        this.canvasContext.fill();
    }

    private static createCanvas(): HTMLElement{
        const canvasElement = document.createElement("canvas");
        canvasElement.setAttribute("id", CanvasSpec.CANVAS_ID);
        canvasElement.setAttribute("width", `${CanvasSpec.CANVAS_WIDTH}`);
        canvasElement.setAttribute("height", `${CanvasSpec.CANVAS_HEIGHT}`);
        document.body.appendChild(canvasElement);
        return canvasElement;
    }

}