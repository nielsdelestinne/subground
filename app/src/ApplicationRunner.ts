import Engine, {default as GameEngine} from "./engine/GameEngine";
import DrawEngine from "./engine/DrawEngine";

class ApplicationRunner {

    constructor(private engine: Engine) {
    }

    public start(): void {
        this.engine.start();
    }

}

/**
 * ------------------
 * Start Application
 * ------------------
 */
new ApplicationRunner(
    new GameEngine(
        new DrawEngine()
    )
).start();
