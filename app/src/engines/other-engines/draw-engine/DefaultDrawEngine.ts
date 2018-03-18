import CanvasSpec from "../../../CanvasSpec";
import Engine from "../Engine";
import Drawable from "./drawable-domain/Drawable";

export default class DrawEngine implements Engine {

    private canvasElement: any;

    private canvasContext: any;
    constructor(private drawables: Drawable[]) {
        this.canvasElement = DrawEngine.createCanvas();
        this.canvasContext = this.canvasElement.getContext("2d");
    }

    public addDrawables(drawables: Drawable[]) {
        this.drawables.push(...drawables);
    }

    public execute(): void{
        this.drawCanvas();
        this.drawBackground();
        this.drawDrawables();
    }

    private drawBackground(): void {
        this.canvasContext.rect(0, 0, document.getElementById("gui").offsetWidth, document.getElementById("gui").offsetWidth);
        this.canvasContext.fillStyle = CanvasSpec.CANVAS_BACKGROUND_COLOR;
        this.canvasContext.fill();
    }

    drawDrawables(): void {
        this.drawables
            .forEach(drawable => drawable.draw(this.canvasContext));
    }

    private drawCanvas(): void {
        const canvasElement = document.getElementsByTagName("canvas").item(0);
        canvasElement.setAttribute("width", `${CanvasSpec.width()}`);
        canvasElement.setAttribute("height", `${CanvasSpec.height()}`);
    }

    private static createCanvas(): HTMLElement{
        const canvasElement = document.createElement("canvas");
        canvasElement.setAttribute("id", CanvasSpec.CANVAS_ID);
        canvasElement.setAttribute("width", `${CanvasSpec.width()}`);
        canvasElement.setAttribute("height", `${CanvasSpec.height()}`);
        document.getElementById("gui").appendChild(canvasElement);
        return canvasElement;
    }

}