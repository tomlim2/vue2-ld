import store from "@/store"
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

    POST = async (pathName: string, body: any) => {
        try {
            const response = await axios.post(this.baseUrl + pathName, body)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    getWidgets = async () => {
        const response = await this.GET('widget/list')
        if (response) {
            store.state.widgets = response
        }
    }

    postCustomWidgets = async (body: any) => {
        const response = await this.POST('widget/list', body)
        return response
    }
}

export default ModelTest