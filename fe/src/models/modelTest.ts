import axios from "axios"

class ModelTest {
    baseUrl: string

    constructor() {
        this.baseUrl = 'http://localhost:3000/api/'
    }

    GET = async (pathName: string) => {
        try {
            const response = await axios.get(this.baseUrl + pathName)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    getWidgets = async () => {
        const response = await this.GET('widget/widgets')

        return response
    }



}

export default ModelTest