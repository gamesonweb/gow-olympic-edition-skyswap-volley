import {PlayerNetworkUpdate} from "./PlayerNetworkUpdate";
import {PlayerNetworkShoot} from "./PlayerNetworkShoot";

export class ClientNetInterface{

    NbPlayersListener: (value: number) => void = (value: number) => {};
    PositionUpdateListener: (value: PlayerNetworkUpdate) => void = (value: PlayerNetworkUpdate) => {};
    BallShootListener: (value: PlayerNetworkShoot) => void = (value: PlayerNetworkShoot) => {};


    constructor() {

    }


    public setEventNbPlayersListener(listener: (value: number) => void){
        this.NbPlayersListener = listener;
        listener(1)
    }

    public setEventPositionUpdateListener(listener: (value: PlayerNetworkUpdate) => void){
        this.PositionUpdateListener = listener;
    }

    public setBallShootListener(listener: (value: PlayerNetworkShoot) => void){
        this.BallShootListener=listener;
    }
}