// Le "ts-ignore" est obligatoire car le module "neat_net-js" n'est pas typé.
// @ts-ignore
// @ts-ignore
import Neataptic from "neataptic/src/neataptic";
let Neat = Neataptic.Neat;
let methods = Neataptic.methods;
let architect = Neataptic.architect;
let Network = Neataptic.Network;


export class NeatCreature{
    private network: Network;
    constructor(network:Network) {
        this.network = network;
    }

    public addFitness(fitness: number){
        this.network.score += fitness;
    }

    public activate(inputs: number[]): number{
        let res = this.network.activate(inputs);
        let max = 0;
        let index = 0;
        for (let i = 0; i < res.length; i++){
            if (res[i] > max){
                max = res[i];
                index = i;
            }
        }
        return index;
    }

    public get fitness(): number{
        return this.network.score;
    }
    public set fitness(fitness: number){
        this.network.score = fitness;
    }

}