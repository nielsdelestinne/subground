import RawRoom from "./RawRoom";
import Room from "../../domain/rooms/Room";
import Tile from "../../domain/rooms/Tile";
import {TileType} from "../../domain/rooms/TileType";
import Coordinate from "../../domain/rooms/Coordinate";

export default class RoomGenerator {

    public static generateRooms(rawRooms: RawRoom[]): Room[] {
        return rawRooms
            .map(rawRoom => new Room(rawRoom.name, RoomGenerator.mapLayoutToTiles(rawRoom.layout)))
    }

    private static mapLayoutToTiles(layout: string[][]): Tile[] {
        const tiles = Array();
        for(let rowIndex = 0; rowIndex < layout.length; rowIndex++) {
            for(let columnIndex = 0; columnIndex < layout[rowIndex].length; columnIndex++) {
                tiles.push(
                    new Tile(
                        TileType[layout[rowIndex][columnIndex]],
                        new Coordinate(rowIndex, columnIndex)));
            }
        }
        return tiles;
    }

}