import {PlayerNetworkUpdate} from "./PlayerNetworkUpdate";
import {PlayerNetworkShoot} from "./PlayerNetworkShoot";
import * as Colyseus from "colyseus.js";
import {BallSide} from "../enum/BallSide";

abstract class Player {
    x: number = 0;
    y: number = 0;

    onChange(callback: () => void) {
    }
    onMessage(message: string, callback: (client: any, data: any) => void) {

    }
}


export class ClientNetInterface {

    NbPlayersListener: (value: number) => void = (value: number) => {
    };
    _positionUpdateListener: (value: any) => void = (value: PlayerNetworkUpdate) => {
    };
    _ballUpdateListener: (value: PlayerNetworkShoot) => void = (value: PlayerNetworkShoot) => {
    };
    _resetListener: (value: BallSide) => void = (value: BallSide) => {
    };

    client: Colyseus.Client;
    room: Colyseus.Room | undefined;


    constructor() {
        var host = window.document.location.host.replace(/:.*/, '');
        var port =3000;
        this.client = new Colyseus.Client(location.protocol.replace("http", "ws") + "//" + host + (port ? ':' + port : ''));

        this.client.joinOrCreate("state_handler").then(room_instance => {
            this.room = room_instance

            this.room.state.players.onRemove(function (player: Player, sessionId: any) {
                console.log("Player removed", sessionId, player);
            });

            this.room.onMessage("move", (message: any) => {
                console.log("StateHandlerRoom received message from", ":", message);
                this._positionUpdateListener(message);
            });
            this.room.onMessage("projectileMove", (message: any) => {
                this._ballUpdateListener(new PlayerNetworkShoot(message.x, message.y, message.xVelocity, message.yVelocity));
                if (message.x < 0){
                }
            });
            this.room.onMessage("reset", (message: any) => {
                this._resetListener(message.left);
            });

        });


    }


    public setEventNbPlayersListener(listener: (value: number) => void) {
        this.NbPlayersListener = listener;
        listener(1)
    }

    public setEventPositionUpdateListener(listener: (value: any) => void) {
        this._positionUpdateListener = listener;
    }

    public setBallBallUpdate(listener: (value: PlayerNetworkShoot) => void) {
        this._ballUpdateListener = listener;
    }

    public setReset(listener: (value: BallSide) => void) {
        this._resetListener = listener;
    }
    public sendPositionUpdate(x: number, y: number, eventList: number[]) {
        if (true) {
            if (this.room) {
                this.room.send("move", {x: x, y: y, eventList: eventList});
            }
        }
    }
    public sendBallUpdate(x: number, y: number, xVelocity: number, yVelocity: number) {
        if (true) {
            if (this.room) {
                this.room.send("projectileMove", {x: x, y: y, xVelocity: xVelocity, yVelocity: yVelocity});
            }
        }
    }
    public sendReset(left: BallSide) {
        if (true) {
            if (this.room) {
                this.room.send("reset", {left: left});
            }
        }
    }
}