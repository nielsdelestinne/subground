/**
 * ---------------
 * <Configurable>
 * ---------------
 */
export default class CanvasSpec {
    public static readonly CANVAS_ID: string = "subgroundCanvas";
    public static readonly CANVAS_WIDTH: number = document.getElementById("gui").offsetWidth;
    public static readonly CANVAS_HEIGHT: number = document.getElementById("gui").offsetWidth; // same height as width
    public static readonly CANVAS_BACKGROUND_COLOR: string = "#181818";
}