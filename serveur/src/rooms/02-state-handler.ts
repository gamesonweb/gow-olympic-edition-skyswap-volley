import { Room, Client } from "colyseus";
import { Schema, type } from "@colyseus/schema";



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
    maxClients = 2;

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
        // if (this.maxClient < this.clients.length) {
        //     return client.leave()
        // }
        console.log(client.sessionId, "joined!");
        this.state.addPlayer();
        if (this.clients.length === this.maxClients) {
            this.broadcast("start");
        }
    }

    onLeave (client) {
        console.log(client.sessionId, "left!");
        this.state.removePlayer();
        this.broadcast("leave");
    }

    onDispose () {
        console.log("Dispose StateHandlerRoom");
    }

}


import * as crypto from 'crypto';

export class StateHandlerRoomWithPassword extends StateHandlerRoom {
    private roomPassword: string;

    onCreate (options) {
        super.onCreate(options);
        // Enregistrez le mot de passe fourni lors de la création de la salle
        if (!options.password){
            throw new Error("Password is required");
        }
        this.roomPassword = this.hashPassword(options.password);
    }

    onAuth(client, options, req) {
        // Vérifiez si le mot de passe fourni dans les options est le même que le mot de passe de la salle
        if (this.hashPassword(options.password) === this.roomPassword) {
            return true;
        } else {
            return false;
        }
    }

    private hashPassword(password: string): string {
        const hash = crypto.createHash('sha256');
        hash.update(password);
        return hash.digest('hex');
    }
}