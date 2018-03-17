import RawRoom from "./RawRoom";

export default class RawRoomFactory {

    private static readonly ROOM001: RawRoom = {
        "name": "Entry point",
        "layout": [
            ["X", "X", "O", "X", "X"],
            ["X", "O", "O", "O", "X"],
            ["O", "O", "O", "O", "O"],
            ["X", "O", "O", "O", "X"],
            ["X", "X", "O", "X", "X"]
        ]
    };
    private static readonly ROOM002: RawRoom = {
        "name": "Second room",
        "layout": [
            ["X", "X", "O", "X", "X"],
            ["X", "O", "O", "O", "X"],
            ["O", "O", "O", "O", "O"],
            ["X", "O", "O", "O", "X"],
            ["X", "X", "O", "X", "X"]
        ]
    };


    public static readonly ALL_ROOMS: RawRoom[] = [
        RawRoomFactory.ROOM001,
        RawRoomFactory.ROOM002
    ];

}