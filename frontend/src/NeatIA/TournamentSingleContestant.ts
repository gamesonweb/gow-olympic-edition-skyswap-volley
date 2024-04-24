import {NeatCreature} from "./NeatCreature.ts";
import {TrainingGameScene} from "./TrainingGameScene.ts";

export class TournamentSingleContestant {
    private _participants: NeatCreature[];
    private _gameScene: TrainingGameScene;

    constructor(participants: NeatCreature[],trainingGameScene: TrainingGameScene) {
        this._participants = participants;
        this._gameScene = trainingGameScene
    }

    public async run() {
        for (let i= 0; i < this._participants.length; i++) {
            this._participants[i].fitness = 0;
        }

        for (let i = 0; i < this._participants.length; i++) {
            let participant = this._participants[i];
            let winner = await this.duel(participant, participant);
            participant.fitness += winner;
        }

        return
    }


    private async duel(participant1: NeatCreature, participant2: NeatCreature): Promise<number> {
        return new Promise((resolve, reject) => {
            this._gameScene.duel(participant1, participant2, (winner, nbEchange: number) => {
                if (winner) {
                    resolve(nbEchange);
                } else {
                    resolve(nbEchange);
                }
            });
        });
    }
}