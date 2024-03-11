export class FrontendEvent{

    private static _onGameStart: (finalScore:number) => void = (finalScore:number) => {};
    private static _onGameEnd: (_leftPlayerScore:number,_rightPlayerScore:number) => void = () => {};
    private static _onGamePointScoredLeft: (scored:number) => void = (scored:number) => {};
    private static _onGamePointScoredRight: (scored:number) => void = (scored:number) => {};


    static setOnGameStart(value: (finalScore: number) => void) {
        this._onGameStart = value;
    }

    static setOnGameEnd(value: (_leftPlayerScore:number,_rightPlayerScore:number) => void) {
        this._onGameEnd = value;
    }

    static setOnGamePointScoredLeft(value: (scored: number) => void) {
        this._onGamePointScoredLeft = value;
    }

    static setOnGamePointScoredRight(value: (scored: number) => void) {
        this._onGamePointScoredRight = value;
    }


    static get onGameStart(): (finalScore: number) => void {
        return this._onGameStart;
    }

    static get onGameEnd(): (_leftPlayerScore:number,_rightPlayerScore:number) => void {
        return this._onGameEnd;
    }

    static get onGamePointScoredLeft(): (scored: number) => void {
        return this._onGamePointScoredLeft;
    }

    static get onGamePointScoredRight(): (scored: number) => void {
        return this._onGamePointScoredRight;
    }
}