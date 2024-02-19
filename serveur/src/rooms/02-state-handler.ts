import { Room, Client } from "colyseus";
import { Schema, type, MapSchema } from "@colyseus/schema";

export class Player extends Schema {
    @type("number")
    x = Math.floor(Math.random() * 400);

    @type("number")
    y = Math.floor(Math.random() * 400);
}
export class Projectile extends Schema {
    @type("number")
    x = 0;

    @type("number")
    y = 3;

    @type("number")
    xVelocity = 0;

    @type("number")
    yVelocity = 0;
}

export class State extends Schema {
    @type({ map: Player })
    players = new MapSchema<Player>();

    something = "This attribute won't be sent to the client-side";

    createPlayer(sessionId: string) {
        this.players.set(sessionId, new Player());
    }

    removePlayer(sessionId: string) {
        this.players.delete(sessionId);
    }

    movePlayer (sessionId: string, movement: any) {
        this.players.get(sessionId).x = movement.x;
        this.players.get(sessionId).y = movement.y;
    }

    updateProjectile (movement: any) {
        this.projectile.x = movement.x;
        this.projectile.y = movement.y;
        this.projectile.xVelocity = movement.xVelocity;
        this.projectile.yVelocity = movement.yVelocity;
    }
}

export class StateHandlerRoom extends Room<State> {
    maxClients = 4;

    onCreate (options) {
        console.log("StateHandlerRoom created!", options);

        this.setState(new State());

        this.onMessage("move", (client, data) => {
            console.log("StateHandlerRoom received message from", client.sessionId, ":", data);
            this.state.movePlayer(client.sessionId, data);
        });

        this.onMessage("projectileMove", (client, data) => {
            console.log("StateHandlerRoom received message from", client.sessionId, ":", data);
            this.clients.forEach(c => {
                if (c.sessionId !== client.sessionId) {
                    c.send("projectileMove", data);
                }
            });
        });
    }

    // onAuth(client, options, req) {
    //     return true;
    // }

    onJoin (client: Client) {
        // client.send("hello", "world");
        console.log(client.sessionId, "joined!");
        this.state.createPlayer(client.sessionId);
    }

    onLeave (client) {
        console.log(client.sessionId, "left!");
        this.state.removePlayer(client.sessionId);
    }

    onDispose () {
        console.log("Dispose StateHandlerRoom");
    }

}
