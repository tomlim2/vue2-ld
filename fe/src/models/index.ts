import ModelTest from "@/models/modelTest"

class ModelManager {
    test: ModelTest

    constructor() {
        this.test = new ModelTest
    }
}

export const useModel = () => {
    return new ModelManager
}