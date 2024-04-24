import {NeatCreature} from "./NeatCreature.ts";
import {TrainingGameScene} from "./TrainingGameScene.ts";

export class Tournament {
    private _participants: NeatCreature[];
    private _currentRound: NeatCreature[];
    private _gameScene: TrainingGameScene;

    constructor(participants: NeatCreature[],trainingGameScene: TrainingGameScene) {
        this._participants = participants;
        this._currentRound = [...participants];
        this._gameScene = trainingGameScene
    }

    public async run() {
        for (let i = 0; i < this._participants.length; i++) {
            this._participants[i].fitness=0;
        }

        while (this._currentRound.length > 1) {
            let nextRound: NeatCreature[] = [];

            for (let i = 0; i < this._currentRound.length; i += 2) {
                if (i + 1 >= this._currentRound.length) {
                    nextRound.push(this._currentRound[i]);
                    break;
                }
                let participant1 = this._currentRound[i];
                let participant2 = this._currentRound[i + 1];

                let winner = await this.duel(participant1, participant2);
                participant1.fitness += winner;
                participant2.fitness += winner;
                // if (winner) {
                //     console.log("winner",winner);
                //     winner.fitness += 1;
                //     nextRound.push(winner);
                // }else {
                //     // nextRound.push(participant1);
                //     // nextRound.push(participant2);
                // }
            }

            this._currentRound = nextRound;
        }

        for (let i = 0; i < this._participants.length; i++) {
            this._participants[i].setFitness();
        }

        return this._currentRound[0]; // The winner of the tournament
    }

    // private async duel(participant1: NeatCreature, participant2: NeatCreature): Promise<NeatCreature | null> {
    //     return new Promise((resolve, reject) => {
    //         this._gameScene.duel(participant1, participant2, (winner) => {
    //             if (winner) {
    //                 resolve(winner);
    //             } else {
    //                 resolve(null);
    //             }
    //         });
    //     });
    // }

    private async duel(participant1: NeatCreature, participant2: NeatCreature): Promise<number> {
        return new Promise((resolve, reject) => {
            this._gameScene.duel(participant1, participant2, (winner,nbEchange:number) => {
                if (winner) {
                    resolve(nbEchange);
                } else {
                    resolve(nbEchange);
                }
            });
        });
    }
}