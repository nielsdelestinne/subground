import Tile from "./Tile";

export default class Room {

    constructor(private _name: string,
                private _width: number,
                private _height: number,
                private _tiles: Tile[]){}


    get name(): string {
        return this._name;
    }

    get tiles(): Tile[] {
        return this._tiles;
    }

    /**
     * @returns The number of horizontal tiles the Room has
     */
    get width(): number {
        return this._width;
    }

    /**
     * @returns The number of vertical tiles the Room has
     */
    get height(): number {
        return this._height;
    }
}