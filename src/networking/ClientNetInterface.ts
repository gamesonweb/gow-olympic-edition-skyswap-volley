import {PlayerNetworkUpdate} from "./PlayerNetworkUpdate";
import {PlayerNetworkShoot} from "./PlayerNetworkShoot";
import * as Colyseus from "colyseus.js";

abstract class Player {
    x: number = 0;
    y: number = 0;

    onChange(callback: () => void) {
    }
}


export class ClientNetInterface {

    NbPlayersListener: (value: number) => void = (value: number) => {
    };
    _positionUpdateListener: (value: PlayerNetworkUpdate) => void = (value: PlayerNetworkUpdate) => {
    };
    BallShootListener: (value: PlayerNetworkShoot) => void = (value: PlayerNetworkShoot) => {
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

                        console.log("Player changes", player.x, player.y);
                        this._positionUpdateListener(new PlayerNetworkUpdate(player.x, player.y));
                    });
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

    public setBallShootListener(listener: (value: PlayerNetworkShoot) => void) {
        this.BallShootListener = listener;
    }
    public sendPositionUpdate(x: number, y: number) {
        if (true) {
            console.log("sendPositionUpdate", x, y);
            if (this.room) {
                this.room.send("move", {x: x, y: y});
            }
        }
    }

}