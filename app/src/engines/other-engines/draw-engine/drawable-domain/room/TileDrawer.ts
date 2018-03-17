import Drawable from "../Drawable";
import Tile from "../../../../../domain/rooms/Tile";
import RoomDrawer from "./RoomDrawer";

export default class TileDrawer implements Drawable {

    /**
     * ---------------
     * <Configurable>
     * ---------------
     */
    private static readonly TILE_MARGIN: number = 5;
    private static readonly TILE_COLOR_FILL: string = "#7f3f21";
    private static readonly TILE_COLOR_STROKE: string = "#181818";
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

    private fillTile(canvasContext: any) {
        canvasContext.fillStyle = TileDrawer.TILE_COLOR_FILL;
        canvasContext.fillRect(this.calculateX(), this.calculateY(), this.calculateWidth(), this.calculateHeight());
    }

    private strokeTile(canvasContext: any) {
        canvasContext.strokeStyle = TileDrawer.TILE_COLOR_STROKE;
        canvasContext.lineWidth = TileDrawer.TILE_COLOR_STROKE_WIDTH;
        canvasContext.strokeRect(this.calculateX(), this.calculateY(), this.calculateWidth(), this.calculateHeight());
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