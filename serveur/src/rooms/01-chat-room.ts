import {matchMaker, Room} from "colyseus";

export class ChatRoom extends Room {
    // this room supports only 4 clients connected
    private roomToCreate: string= "state_handler";

    onCreate (options) {
        console.log("ChatRoom created!", options);



    }

    onJoin (client) {

    }

    onLeave (client) {

    }

    async tryCreateRoom() {
        if (this.clients.length < 2){
            return;
        }
        let client1 = this.clients[0];
        let client2 = this.clients[1];
        const room = await matchMaker.createRoom(this.roomToCreate, {});
        for (let i = 0; i < 2; i++){
            //reserve the spot in the room
            const matchData = await matchMaker.reserveSeatFor(room, {clientId: this.clients[i].sessionId});
            //send the room id to the client
            this.clients[i].send("gameFound", matchData);

        }

    }


    onDispose () {
        console.log("Dispose ChatRoom");
    }

}
