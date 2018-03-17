import Drawable from "../Drawable";
import Tile from "../../../../../domain/rooms/Tile";

export default class TileDrawer implements Drawable{

    private static readonly TILE_MARGIN: number = 2;
    private static readonly TILE_COLOR: string = "#68c262";

    constructor(private tileToDraw: Tile,
                private tileWidth: number,
                private tileHeight: number) {}

    draw(canvasContext: any): void {
        this.drawTile(canvasContext);
    }

    private drawTile(canvasContext: any) {
        canvasContext.rect(
            this.tileToDraw.coordinate.x * this.tileWidth + TileDrawer.TILE_MARGIN,
            this.tileToDraw.coordinate.y * this.tileHeight + TileDrawer.TILE_MARGIN,
            this.tileWidth,
            this.tileHeight);
        canvasContext.fillStyle = TileDrawer.TILE_COLOR;
        canvasContext.fill();
    }

}