import {PlayerKeyMapping} from "../players/PlayerKeyMapping";
import {PlayerAction} from "../enum/PlayerAction";
import {BoardSide} from "../enum/BoardSide";



export class KeyMappingInterface {
    private _playerLeftKeyMapping : PlayerKeyMapping;
    private _playerRightKeyMapping : PlayerKeyMapping;
    static _instance : KeyMappingInterface;
    private _observers: (()=>void)[] = [];

    private constructor() {
        this._playerLeftKeyMapping = new PlayerKeyMapping("q", "d", " ", "z");
        this._playerRightKeyMapping = new PlayerKeyMapping("1", "3", "+", "5");
        this.loadKeyMappings();
    }

    static init(){
        if (!KeyMappingInterface._instance) {
            KeyMappingInterface._instance = new KeyMappingInterface();
        }
    }


    get instance() : KeyMappingInterface {
        return KeyMappingInterface._instance;
    }


    get playerLeftKeyMapping() : PlayerKeyMapping {
        return this._playerLeftKeyMapping;
    }

    get playerRightKeyMapping() : PlayerKeyMapping {
        return this._playerRightKeyMapping;
    }

    listenTotKeyPress(playerAction: PlayerAction, boardSide: BoardSide) {
        const listener = (event: KeyboardEvent) => {
            let key = event.key;
            switch (boardSide) {
                case BoardSide.Left:
                    switch (playerAction) {
                        case PlayerAction.Left:
                            this._playerLeftKeyMapping.left = key;
                            break;
                        case PlayerAction.Right:
                            this._playerLeftKeyMapping.right = key;
                            break;
                        case PlayerAction.Shoot:
                            this._playerLeftKeyMapping.shoot = key;
                            break;
                        case PlayerAction.Jump:
                            this._playerLeftKeyMapping.jump = key;
                            break;
                    }
                    break;
                case BoardSide.Right:
                    switch (playerAction) {
                        case PlayerAction.Left:
                            this._playerRightKeyMapping.left = key;
                            break;
                        case PlayerAction.Right:
                            this._playerRightKeyMapping.right = key;
                            break;
                        case PlayerAction.Shoot:
                            this._playerRightKeyMapping.shoot = key;
                            break;
                        case PlayerAction.Jump:
                            this._playerRightKeyMapping.jump = key;
                            break;
                    }
                    break;

            }
            // Se désabonner après la première touche pressée
            window.removeEventListener('keydown', listener);
            this.notifyObservers();
            this.saveKeyMappings();
        };
        window.addEventListener('keydown', listener);
    }
    saveKeyMappings() {
        const playerLeftKeyMappingStr = JSON.stringify(this._playerLeftKeyMapping);
        const playerRightKeyMappingStr = JSON.stringify(this._playerRightKeyMapping);

        localStorage.setItem('playerLeftKeyMapping', playerLeftKeyMappingStr);
        localStorage.setItem('playerRightKeyMapping', playerRightKeyMappingStr);
    }

    loadKeyMappings() {
        const playerLeftKeyMappingStr = localStorage.getItem('playerLeftKeyMapping');
        const playerRightKeyMappingStr = localStorage.getItem('playerRightKeyMapping');

        if (playerLeftKeyMappingStr) {
            this._playerLeftKeyMapping = JSON.parse(playerLeftKeyMappingStr);
        }

        if (playerRightKeyMappingStr) {
            this._playerRightKeyMapping = JSON.parse(playerRightKeyMappingStr);
        }
    }

    addObserver(observer: ()=>void) {
        this._observers.push(observer);
    }

    notifyObservers() {
        this._observers.forEach(observer => observer());
    }

}