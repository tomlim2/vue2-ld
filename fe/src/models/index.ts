import ModelTest from "@/models/modelTest"

class ModelManager {
    dummy: ModelTest

    constructor() {
        this.dummy = new ModelTest
    }
}

export const useModel = () => {
    return new ModelManager()
}