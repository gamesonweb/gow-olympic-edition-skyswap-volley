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

    room: Colyseus.Room | undefined;


    constructor(room_instance: Colyseus.Room) {

        this.room = room_instance;

        console.log("joined successfully", room_instance);

        this.room.onMessage("move", (message: any) => {
            console.log(message);
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