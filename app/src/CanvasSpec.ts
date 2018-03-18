/**
 * ---------------
 * <Configurable>
 * ---------------
 */
export default class CanvasSpec {
    public static readonly CANVAS_ID: string = "subgroundCanvas";
    public static readonly CANVAS_BACKGROUND_COLOR: string = "#181818";

    public static width(): number {
        return document.getElementById("gui").offsetWidth;
    }

    public static height(): number {
        return CanvasSpec.width();
    }

}