import { Room, Client } from "colyseus";
import { Schema, type, MapSchema } from "@colyseus/schema";



export class State extends Schema {
    @type("number")
    players = 0;

    something = "This attribute won't be sent to the client-side";


    removePlayer() {
        this.players--;
    }

    addPlayer() {
        this.players++;
    }
}

export class StateHandlerRoom extends Room<State> {
    maxClient = 2;

    onCreate (options) {
        console.log("StateHandlerRoom created!", options);

        this.setState(new State());

        this.onMessage("move", (client, data) => {
            this.clients.forEach(c => {
                if (c.sessionId !== client.sessionId) {
                    c.send("move", data);
                }
            });
        });

        this.onMessage("projectileMove", (client, data) => {
            console.log("StateHandlerRoom received message from", client.sessionId, ":", data);
            this.clients.forEach(c => {
                if (c.sessionId !== client.sessionId) {
                    c.send("projectileMove", data);
                }
            });
        });
        this.onMessage("reset", (client, data) => {
            console.log("StateHandlerRoom received message from", client.sessionId, ":", data);
            this.clients.forEach(c => {
                if (c.sessionId !== client.sessionId) {
                    c.send("reset", data);
                }
            });
        });
    }

    // onAuth(client, options, req) {
    //     return true;
    // }

    onJoin (client: Client) {
        if (this.maxClient < this.clients.length) {
            return client.leave()
        }
        console.log(client.sessionId, "joined!");
        this.state.addPlayer();
    }

    onLeave (client) {
        console.log(client.sessionId, "left!");
        this.state.removePlayer();
    }

    onDispose () {
        console.log("Dispose StateHandlerRoom");
    }

}
