// Le "ts-ignore" est obligatoire car le module "neat_net-js" n'est pas typé.
// @ts-ignore
import {NEAT, activation, crossover, mutate } from "neat_net-js";


export class NeatCreature{
    private index: number;
    private neat: NEAT;
    public fitness: number = 0;
    constructor(index: number,neat:NEAT) {
        this.index = index;
        this.neat = neat;
    }

    public setInputs(inputs: number[]){
        this.neat.setInputs(inputs, this.index);
    }
    public getDesicions(): number{
        return this.neat.getDesicions()[this.index];
    }
    public setFitness(){
        this.neat.setFitness(this.fitness, this.index);
    }
    public addFitness(fitness: number){
        this.neat.addFitness(fitness, this.index);
    }
    public feedForward(){
        this.neat.feedForward();
    }

}