const { Seat } = require("../models");

class SeatCtl {
    update(req, res) {
        Seat.findOneAndUpdate({_id, req.param.id}, req.body)
            .then((data) => res.json(data))
            .catch((err) => res.status(422).json(err));
    }
}

module.exports = new SeatCtl();