import {TileType} from "./TileType";
import Coordinate from "./Coordinate";

export default class Tile {

    constructor(private _tileType: TileType,
                private _coordinate: Coordinate) {}

    get tileType(): TileType {
        return this._tileType;
    }

    get coordinate(): Coordinate {
        return this._coordinate;
    }
}