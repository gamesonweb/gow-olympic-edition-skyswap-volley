import {PlayerNetworkUpdate} from "./PlayerNetworkUpdate";
import {PlayerNetworkShoot} from "./PlayerNetworkShoot";
import * as Colyseus from "colyseus.js";

export class ClientNetInterface {

    NbPlayersListener: (value: number) => void = (value: number) => {
    };
    PositionUpdateListener: (value: PlayerNetworkUpdate) => void = (value: PlayerNetworkUpdate) => {
    };
    BallShootListener: (value: PlayerNetworkShoot) => void = (value: PlayerNetworkShoot) => {
    };

    client: Colyseus.Client;
    room: Colyseus.Room | undefined;


    constructor() {
        var host = window.document.location.host.replace(/:.*/, '');
        var port =2567;
        this.client = new Colyseus.Client(location.protocol.replace("http", "ws") + "//" + host + (port ? ':' + port : ''));

        this.client.joinOrCreate("state_handler").then(room_instance => {
            this.room = room_instance

            this.room.state.players.onRemove(function (player: any, sessionId: any) {
                console.log("Player removed", sessionId, player);
            });

            this.room.state.players.onAdd(function (player: any, sessionId: any) {
                console.log("Player added", sessionId, player);
            });
        });


    }


    public setEventNbPlayersListener(listener: (value: number) => void) {
        this.NbPlayersListener = listener;
        listener(1)
    }

    public setEventPositionUpdateListener(listener: (value: PlayerNetworkUpdate) => void) {
        this.PositionUpdateListener = listener;
    }

    public setBallShootListener(listener: (value: PlayerNetworkShoot) => void) {
        this.BallShootListener = listener;
    }

    public sendPositionUpdate(x: number, y: number) {
        if (this.room) {
            this.room.send("move", {x: x, y: y});
        }

    }

}