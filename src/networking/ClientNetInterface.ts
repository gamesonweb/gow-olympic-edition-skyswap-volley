import {PlayerNetworkUpdate} from "./PlayerNetworkUpdate";
import {PlayerNetworkShoot} from "./PlayerNetworkShoot";
import * as Colyseus from "colyseus.js";

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
    _positionUpdateListener: (value: PlayerNetworkUpdate) => void = (value: PlayerNetworkUpdate) => {
    };
    _ballUpdateListener: (value: PlayerNetworkShoot) => void = (value: PlayerNetworkShoot) => {
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

            this.room.state.players.onAdd((player: Player, sessionId: any) => {
                console.log("Player added", sessionId, player);
                if (sessionId !== this.room?.sessionId) {
                    player.onChange(() => {

                        this._positionUpdateListener(new PlayerNetworkUpdate(player.x, player.y));

                    });

                }
            });
            this.room.onMessage("projectileMove", (message: any) => {
                this._ballUpdateListener(new PlayerNetworkShoot(message.x, message.y, message.xVelocity, message.yVelocity));
                if (message.x < 0){
                }
            });

        });


    }


    public setEventNbPlayersListener(listener: (value: number) => void) {
        this.NbPlayersListener = listener;
        listener(1)
    }

    public setEventPositionUpdateListener(listener: (value: PlayerNetworkUpdate) => void) {
        this._positionUpdateListener = listener;
    }

    public setBallBallUpdate(listener: (value: PlayerNetworkShoot) => void) {
        this._ballUpdateListener = listener;
    }
    public sendPositionUpdate(x: number, y: number) {
        if (true) {
            if (this.room) {
                this.room.send("move", {x: x, y: y});
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

}