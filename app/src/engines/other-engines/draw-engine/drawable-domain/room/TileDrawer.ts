import Drawable from "../Drawable";
import Tile from "../../../../../domain/rooms/Tile";
import RoomDrawer from "./RoomDrawer";

export default class TileDrawer implements Drawable {

    /**
     * ---------------
     * <Configurable>
     * ---------------
     */
    private static readonly TILE_MARGIN: number = 10;
    private static readonly TILE_COLOR_FILL: string = "#c25301";
    private static readonly TILE_COLOR_STROKE: string = "#edf3e1";
    private static readonly TILE_COLOR_STROKE_WIDTH: number = 5;
    /**
     * ---------------
     * </Configurable>
     * ---------------
     */

    constructor(private tileToDraw: Tile,
                private tileWidth: number,
                private tileHeight: number) {
    }

    draw(canvasContext: any): void {
        this.drawTile(canvasContext);
    }

    private drawTile(canvasContext: any) {
        this.fillTile(canvasContext);
        this.strokeTile(canvasContext);
    }

    private strokeTile(canvasContext: any) {
        canvasContext.strokeStyle = TileDrawer.TILE_COLOR_STROKE;
        canvasContext.lineWidth = TileDrawer.TILE_COLOR_STROKE_WIDTH;
        canvasContext.strokeRect(this.calculateX(), this.calculateY(), this.calculateWidth(), this.calculateHeight());
    }

    private fillTile(canvasContext: any) {
        canvasContext.fillStyle = TileDrawer.TILE_COLOR_FILL;
        canvasContext.fillRect(this.calculateX(), this.calculateY(), this.calculateWidth(), this.calculateHeight());
    }

    private calculateX() {
        return this.tileToDraw.coordinate.x * this.tileWidth + RoomDrawer.ROOM_MARGIN + TileDrawer.TILE_MARGIN;
    }

    private calculateY() {
        return this.tileToDraw.coordinate.y * this.tileHeight + RoomDrawer.ROOM_MARGIN + TileDrawer.TILE_MARGIN;
    }

    private calculateWidth() {
        return this.tileWidth - TileDrawer.TILE_MARGIN * 2;
    }

    private calculateHeight() {
        return this.tileHeight - TileDrawer.TILE_MARGIN * 2;
    }
}