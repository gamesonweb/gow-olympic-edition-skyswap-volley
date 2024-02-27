import {PlayerKeyMapping} from "../players/PlayerKeyMapping";
import {PlayerAction} from "../enum/PlayerAction";
import {BoardSide} from "../enum/BoardSide";



export class KeyMapping {
    private _playerLeftKeyMapping : PlayerKeyMapping;
    private _playerRightKeyMapping : PlayerKeyMapping;

    constructor() {
        this._playerLeftKeyMapping = new PlayerKeyMapping("q", "d", " ", "z");
        this._playerRightKeyMapping = new PlayerKeyMapping("1", "3", "+", "5");
    }

    get playerLeftKeyMapping() : PlayerKeyMapping {
        return this._playerLeftKeyMapping;
    }

    get playerRightKeyMapping() : PlayerKeyMapping {
        return this._playerRightKeyMapping;
    }

    listenTotKeyPress(playerAction: PlayerAction, boardSide: BoardSide) {
        const listener = (event: KeyboardEvent) => {
            const key = event.key;
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
            console.log(key);
            // Se désabonner après la première touche pressée
            window.removeEventListener('keydown', listener);
        };
        window.addEventListener('keydown', listener);
    }

}