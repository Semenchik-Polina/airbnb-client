export default class Room {
    constructor(data) {
        this.id = data.id;
        this.count = +data.count;
        this.capacity = +data.capacity;
        this.cost = +data.cost;
        this.type = data.type;
        this.photos = data.photos;
    }
}
