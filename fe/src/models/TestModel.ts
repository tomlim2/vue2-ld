import Model from "./classes/Model";

export default class TestModel extends Model {

    async getBanners() {
        const banners = await this.GET(["banners"]);
        return banners
    }

}