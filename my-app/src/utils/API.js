import axios from "axios"

export default {
    getSeats: function() {
        return axios.get("/api/seat");
    },

    getSeat: function (id) {
        return axios.get("/api/seat/" + id);
    },

    updateSeat: function(id, data) {
        return axios.post("/api/seat/" + id, data);
    },

    getFloors: function() {
        return axios.get("api/floor");
    },

    getFloor: function(data) {
        return axios.get("/api/floor", data);
    },

    updateFloor: function(id, data) {
        return axios.post("api/floor/" + id, data);
    }

    
}
