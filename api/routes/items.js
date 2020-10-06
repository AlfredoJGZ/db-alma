const express = require("express");
const items = require("../models/items");
const router = express.Router(); 

router.get("/", (req,res)=>{
    items.find()
        .exec()
        .then(x => res.status(200).send(x))
})

router.get("/:id", (req,res) => {
    items.findById(req.params.id)
        .exec()
        .then(x => res.status(200).send(x))
})

router.post("/", (req,res) => {
    items.create(req.body)
        .then(x => res.status(201).send(x))
})

router.put("/:id", (req,res) => {
    items.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.sendStatus(204))
})

router.delete("/:id", (req,res) => {
    items.findOneAndDelete(req.params.id)
        .exec()
        .then(() => res.sendStatus(204)) 
})

module.exports = router; 