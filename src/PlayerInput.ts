import { ActionManager, ExecuteCodeAction, Scalar, Scene } from "@babylonjs/core";

// https://doc.babylonjs.com/guidedLearning/createAGame/characterMovePt1
export class PlayerInput {
    private inputMap = new Map();
    private eventSubscriber: any= [];

    private horizontal = 0;
    private horizontalAxis = 0;

    constructor(scene: Scene) {
        scene.actionManager = new ActionManager(scene);

        scene.actionManager.registerAction(
            new ExecuteCodeAction(ActionManager.OnKeyDownTrigger, (evt) => {
                this.inputMap.set(
                    evt.sourceEvent.key,
                    evt.sourceEvent.type == "keydown"
                );
            })
        );
        scene.actionManager.registerAction(
            new ExecuteCodeAction(ActionManager.OnKeyUpTrigger, (evt) => {
                this.inputMap.set(
                    evt.sourceEvent.key,
                    evt.sourceEvent.type == "keydown"
                );
            })
        );

        scene.onBeforeRenderObservable.add(() => {
            // console.log(this.inputMap);

            this.updateFromKeyboard()
        });
    }

    public subscribeToInput(subscriber: any): void {
        this.eventSubscriber.push(subscriber);
    }

    private updateFromKeyboard(): void {
        this.eventSubscriber.forEach((subscriber: any) => {
            subscriber(this.inputMap);
        });
    }
}
