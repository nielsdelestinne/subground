import DrawEngine from "./engines/other-engines/draw-engine/DefaultDrawEngine";
import GameEngine from "./engines/game-engine/DefaultGameEngine";

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
            new DrawEngine()
        ]
    )
).start();
