import DrawEngine from "./DrawEngine";
import Engine from "./Engine";

export default class GameEngine implements Engine{

    constructor(private drawEngine: DrawEngine) {}

    public start(): void {
        this.drawEngine.start();
    }
}