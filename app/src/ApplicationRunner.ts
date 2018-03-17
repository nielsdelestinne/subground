import DrawEngine from "./engines/other-engines/draw-engine/DefaultDrawEngine";
import GameEngine from "./engines/game-engine/DefaultGameEngine";
import RoomDrawer from "./engines/other-engines/draw-engine/drawable-domain/room/RoomDrawer";
import RawRoomFactory from "./importers/rooms/RawRoomFactory";
import RoomGenerator from "./importers/rooms/RoomGenerator";

class ApplicationRunner {

    constructor(private gameEngine: GameEngine) {
    }

    public start(): void {
        this.gameEngine.start();
    }

}

/**
 * ------------------
 * Start Application
 * ------------------
 */
new ApplicationRunner(
    new GameEngine([
            new DrawEngine([
                new RoomDrawer(RoomGenerator.generateRooms(RawRoomFactory.ALL_ROOMS)[0])
            ])
        ]
    )
).start();
