import Drawable from "../Drawable";
import Room from "../../../../../domain/rooms/Room";
import TileDrawer from "./TileDrawer";
import CanvasSpec from "../../../../../CanvasSpec";

export default class RoomDrawer implements Drawable {

    private static readonly ROOM_MARGIN: number = 10;
    private static readonly ROOM_COLOR: string = "#363636";

    public static readonly ROOM_WIDTH: number = CanvasSpec.CANVAS_WIDTH - (RoomDrawer.ROOM_MARGIN * 2);
    public static readonly ROOM_HEIGHT: number = CanvasSpec.CANVAS_HEIGHT - (RoomDrawer.ROOM_MARGIN * 2);

    constructor(private roomToDraw: Room) {}

    draw(canvasContext: any): void {
        this.drawRoomOutline(canvasContext);
        this.drawTiles(canvasContext);
    }

    private drawRoomOutline(canvasContext: any) {
        canvasContext.rect(
            RoomDrawer.ROOM_MARGIN,
            RoomDrawer.ROOM_MARGIN,
            RoomDrawer.ROOM_WIDTH + RoomDrawer.ROOM_MARGIN,
            RoomDrawer.ROOM_HEIGHT + RoomDrawer.ROOM_MARGIN);
        canvasContext.fillStyle = RoomDrawer.ROOM_COLOR;
        canvasContext.fill();
    }

    private drawTiles(canvasContext: any) {
        this.roomToDraw.tiles
            .forEach(tile => new TileDrawer(tile, this.getTileWidth(), this.getTileHeight())
                .draw(canvasContext));
    }

    private getTileHeight(): number {
        return RoomDrawer.ROOM_HEIGHT / this.roomToDraw.tiles.length;
    }

    private getTileWidth(): number {
        return RoomDrawer.ROOM_WIDTH / this.roomToDraw.tiles.length;
    }
}