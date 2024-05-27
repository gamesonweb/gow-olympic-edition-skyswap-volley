export class FrontendEvent{

    private static _onGameStart: (finalScore:number) => void = (finalScore:number) => {};
    private static _onGameEnd: (_leftPlayerScore:number,_rightPlayerScore:number) => void = () => {};
    private static _onGamePointScoredLeft: (scored:number) => void = (scored:number) => {};
    private static _onGamePointScoredRight: (scored:number) => void = (scored:number) => {};
    private static _onGamePaused: () => void = () => {};
    private static _onGameUnpaused: () => void = () => {};
    // if back to menu is clicked
    private static _onGameAborted: () => void = () => {};
    private static _showImage: (image: string) => void = (image: string) => {};
    private static _maskImage: () => void = () => {};
    private static _showContinueIfLoos: (callback:((val:boolean) => void)) => void = () => {};

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

    static setOnGamePaused(value: () => void) {
        this._onGamePaused = value;
    }

    static setOnGameUnpaused(value: () => void) {
        this._onGameUnpaused = value;
    }

    static setOnGameAborted(value: () => void) {
        this._onGameAborted = value;
    }
    static setOnShowImage(value: (image: string) => void) {
        this._showImage = value;
    }
    static setOnMaskImage(value: () => void) {
        this._maskImage = value;
    }

    static setOnShowContinueIfLoos(value: (callback:((val:boolean) => void)) => void) {
        this._showContinueIfLoos = value;
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

    static get onGamePaused(): () => void {
        return this._onGamePaused;
    }

    static get onGameUnpaused(): () => void {
        return this._onGameUnpaused;
    }

    static get onGameAborted(): () => void {
        return this._onGameAborted;
    }
    static get onShowImage(): (image: string) => void {
        return this._showImage;
    }
    static get onMaskImage(): () => void {
        return this._maskImage;
    }
    static get onShowContinueIfLoos(): (callback:((val:boolean) => void)) => void {
        return this._showContinueIfLoos;
    }
}