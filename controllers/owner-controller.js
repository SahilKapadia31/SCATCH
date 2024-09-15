const ownerModel = require('../models/owner-model');

const creatOwnerFun = async (req, res) => {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
        return res.status(503).send("You dont have permission to create a new owner.")
    }

    let { fullName, email, password } = req.body;

    let createdOwner = await ownerModel.create({ fullName, email, password })
    res.status(201).send(createdOwner)
}

module.exports = { creatOwnerFun }