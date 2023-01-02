import TestModel from "./TestModel";

export class ModelManager {
    Test: TestModel

    constructor() {
        this.Test = new TestModel()
    }
}

let modelManager: ModelManager;

export const useModel = () => {
    if (modelManager == undefined) {
        modelManager = new ModelManager()
    }
    return modelManager;
}