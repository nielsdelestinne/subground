import Drawable from "../Drawable";
import Room from "../../../../../domain/rooms/Room";
import TileDrawer from "./TileDrawer";
import CanvasSpec from "../../../../../CanvasSpec";

export default class RoomDrawer implements Drawable {

    /**
     * ---------------
     * <Configurable>
     * ---------------
     */
    public static readonly ROOM_MARGIN: number = 50;
    /**
     * ---------------
     * </Configurable>
     * ---------------
     */

    private static readonly ROOM_COLOR: string = "#363636";


    constructor(private roomToDraw: Room) {}

    public draw(canvasContext: any): void {
        this.drawRoomOutline(canvasContext);
        this.drawTiles(canvasContext);
    }

    private drawRoomOutline(canvasContext: any) {
        canvasContext.fillStyle = RoomDrawer.ROOM_COLOR;
        canvasContext.fillRect(
            RoomDrawer.ROOM_MARGIN,
            RoomDrawer.ROOM_MARGIN,
            RoomDrawer.getCalculatedRoomWidth(),
            RoomDrawer.getCalculatedRoomHeight())
    }

    private drawTiles(canvasContext: any) {
        this.roomToDraw.tiles
            .forEach(tile => new TileDrawer(tile, this.getTileWidth(), this.getTileHeight())
                .draw(canvasContext));
    }

    private static getCalculatedRoomWidth() {
        return CanvasSpec.width() - (RoomDrawer.ROOM_MARGIN * 2);
    }

    private static getCalculatedRoomHeight() {
        return CanvasSpec.height() - (RoomDrawer.ROOM_MARGIN * 2);
    }

    private getTileHeight(): number {
        return (RoomDrawer.getCalculatedRoomHeight()) / this.roomToDraw.height;
    }

    private getTileWidth(): number {
        return (RoomDrawer.getCalculatedRoomHeight()) / this.roomToDraw.width;
    }
}