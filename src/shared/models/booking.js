export default class Booking {
    constructor(data) {
        this.id = data.id;
        this.user = data.user;
        this.room = data.room;
        this.isApproved = data.isApproved;
        this.hotel = data.hotel;
        this.photo = data.photo;
        this.requestedAt = new Date(data.requestedAt);
        this.totalPrice = data.totalPrice;
        this.guests = data.guests;
        this.dateTo = new Date(data.dateTo);
        this.dateFrom = new Date(data.dateFrom);
        this.arrivalTime = data.arrivalTime;
        this.departureTime = data.departureTime;
        this.facilities = data.facilities;
    }
}
