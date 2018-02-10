import Room from "./Room";

export default class Rooms {

    private static readonly ROOM001: Room = {
        "name": "Entry point",
        "layout": [
            ["X", "X", "U", "X", "X"],
            ["X", "O", "O", "O", "X"],
            ["C", "O", "O", "O", "C"],
            ["X", "O", "O", "O", "X"],
            ["X", "X", "U", "X", "X"]
        ]
    };
    private static readonly ROOM002: Room = {
        "name": "Second room",
        "layout": [
            ["X", "X", "U", "X", "X"],
            ["X", "O", "O", "O", "X"],
            ["C", "O", "O", "O", "C"],
            ["X", "O", "O", "O", "X"],
            ["X", "X", "U", "X", "X"]
        ]
    };


    public static readonly ALL_ROOMS: Room[] = [
        Rooms.ROOM001,
        Rooms.ROOM002
    ];

}