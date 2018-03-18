import {default as GameEngine} from "./GameEngine";
import Engine from "../other-engines/Engine";
import {Observable} from "rxjs/Rx";

export default class DefaultGameEngine implements GameEngine {

    private static readonly LOOP_INTERVAL_IN_SECONDS: number = 1;
    private gameLoopId: number;

    constructor(private managedEngines: Engine[]) {
    }

    public start(): void {
        this.startLoop();
        this.listenToWindowResize();
    }

    public stop(): void {
        this.stopLoop();
    }

    public startLoop(): void {
        this.gameLoopId = setTimeout(() => this.executeManagedEngines(),
            DefaultGameEngine.LOOP_INTERVAL_IN_SECONDS * 60);
    }

    private stopLoop() {
        clearTimeout(this.gameLoopId);
    }

    private executeManagedEngines(): void {
        this.managedEngines
            .forEach(engine => engine.execute());
    }

    private listenToWindowResize() {
        Observable.fromEvent(window, 'resize')
            .debounceTime(1)
            .subscribe((event) => {
                this.executeManagedEngines();
            });
    }
}