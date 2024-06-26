import {Room,Client} from "colyseus.js";


export class Api {

    static instance: Api = new Api();
    private _colyseusClient: Client;
    private _matchMakingRoom: Room | undefined;

    constructor() {
        var host = window.document.location.host.replace(/:.*/, '');
        var port =443;
        var protocol = window.location.protocol;
        protocol = protocol.replace("http", "ws")
        protocol = protocol.replace("https", "wss")
        this._colyseusClient = new Client(protocol + "//" + host + (port ? ':' + port : ''));
    }

    static get colyseusClient(){
        return this.instance._colyseusClient;
    }

    static async startMatchMaking(callback: (room: Room) => void) {
        if (this.instance._matchMakingRoom){
            await this.stopMatchMaking();
        }
        const room_instance = await this.instance._colyseusClient.joinOrCreate("room");
        console.log("joined successfully", room_instance);
        this.instance._matchMakingRoom = room_instance;
        room_instance.onMessage("start", () => {
            room_instance.removeAllListeners();
            callback(room_instance);

        });

    }

    static async stopMatchMaking(){
        if (this.instance._matchMakingRoom){
            await this.instance._matchMakingRoom.leave();
            this.instance._matchMakingRoom = undefined;
        }else {
            throw new Error("no match making started");
        }
    }

    static async createPrivateRoom(callbackCreated: (room: Room) => void,callbackStart: (room: Room) => void, password: string) {
        const room_instance = await this.instance._colyseusClient.create("room_with_password", {password: password});
        callbackCreated(room_instance);
        room_instance.onMessage("move", () => {
            room_instance.removeAllListeners();
            callbackStart(room_instance);
        });
    }

    /**
     * Join a private room
     * @param callback
     * @param password
     * @param id
     * @throws Error if the password is wrong or the room does not exist
     */
    static async joinPrivateRoom(callback: (room: Room) => void, password: string,id: string) {
        const room_instance = await this.instance._colyseusClient.joinById(id, {password: password});

        console.log("joined successfully", room_instance);
        callback(room_instance);
    }

}