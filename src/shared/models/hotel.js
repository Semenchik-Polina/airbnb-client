import Room from './room';

export default class Hotel {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.city = data.city;
        this.country = data.country;
        this.address = data.address;
        this.rooms = data.rooms ? data.rooms.map(room => new Room(room)) : [];
        this.photos = data.photos;
        this.photo = data.photo;
        this.facilities = data.facilities;
    }
}
