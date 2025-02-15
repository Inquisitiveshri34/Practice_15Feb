const Item = require("../models/InventoryItem")

const AddItem = async (req, res)=>{
    try{
        const {name,desc,quantity,price}=req.body;
        if(!name || !quantity || !price){
            return res.status(400).json({error: "Name, Quantity and Price are required."})
        }
        else if(quantity < 0 || price < 0){
            return res.status(400).json({error: "Quantity and Price cannot be negative"})
        }

        const item = new Item({
            name,
            desc : desc || "",
            quantity,
            price
        })
        await item.save()
        res.status(200).json(item)
    } catch (err){
        res.status(500).json({error: "Internal Server Error"})
    }
}

const ShowAllItems = async(req,res)=>{
    try{
        const items = await Item.find()
        res.status(200).send(items)
    }catch(err){
        res.status(500).json({error: "Internal Server Error"})
    }
}

const ShowItem = async(req,res)=>{
    try{
        const {id} = req.params
        const item = await Item.findById(id)
        res.status(200).json(item)
    } catch(err){
        res.status(500).json({error: "Internal Server Error"})
    }
}

module.exports = {AddItem,ShowAllItems,ShowItem}