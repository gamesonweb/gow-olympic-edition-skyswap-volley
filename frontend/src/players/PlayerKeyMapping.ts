
/**
 * PlayerKeyMapping class is used to map the keys for player actions.
 * Each instance of this class represents a unique set of key mappings for a player.
 */
export class PlayerKeyMapping{
    left: string;
    right: string;
    shoot: string;
    jump: string;

    constructor(left: string, right: string, shoot: string, jump: string){
        this.left = left;
        this.right = right;
        this.shoot = shoot;
        this.jump = jump;
    }
}