const User = require("../model/User");
// const data = require('../sample_data.js')
const router = require("express").Router();


// User.insertMany(data)

router.get("/first", async (req,res)=>{
    try{
        const users = await User.find({income: {$lt: "$5.00"}, $or: [{car: {$regex: "Mercedes"}}, {car: "BMW"}]})
        console.log(users);
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/second", async (req,res)=>{
    try{
        const users = await User.find({gender: "Male" , phone_price: {$gt: 10000}})
        console.log(users);
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/third", async (req,res)=>{
    try{
        const users = await User.find({
          last_name: /^M/,
          $where: "this.quote.length > 15",
          $where: function() {
            return this.email.toLowerCase().includes(this.last_name.toLowerCase());
          }
        })
        console.log(users);
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/fourth", async (req,res)=>{
    try{
        const users = await User.find({
            email: {
              $not: {
                $regex: /([0-9]+)/
              }
            },
            $or: [{
              car: {$regex: "Mercedes"}
            }, {
              car: {$regex: "BMW"}
            }, {
              car: {$regex: "Audi"}
            }]
          })
        console.log(users);
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/fifth", async (req,res)=>{
    try{
        const users = await User.aggregate([
          {
            $group: {
              _id: "$city",
              count: { $sum: 1},
              average_income: { $avg: "$income" }
            }
          },
          { $sort: { count: -1 } },
          { $limit: 10 },
          {
            $project: {
              _id: 0,
              city: "$_id",
              count: 1,
              average_income: 1
            }
          }
        ]);
        console.log(users);
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router
