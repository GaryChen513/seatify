const { Floor } = require("../models");

class FloorCtl {
    findAll(req, res) {
        Floor.find(req.query)
    }

    update(req, res) {
        Floor.findOneAndUpdate({ _id: req.param.id }, req.body)
            .then((data) => res.json(data))
            .then((err) => res.status(422).json(err));
    }
}

module.exports =  new FloorCtl();