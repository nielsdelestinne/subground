import Tile from "./Tile";

export default class Room {

    constructor(private _name: string,
                private _tiles: Tile[]){}


    get name(): string {
        return this._name;
    }

    get tiles(): Tile[] {
        return this._tiles;
    }
}