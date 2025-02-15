const express = require("express")
const router = express.Router()
const itemController = require("../controllers/itemController")

router.post("/add",itemController.AddItem)

router.get("/",itemController.ShowAllItems)

router.get("/:id",itemController.ShowItem)

module.exports = router