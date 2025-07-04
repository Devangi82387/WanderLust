const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGOURL = "mongodb://127.0.0.1:27017/wanderlust";

main(). then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGOURL);
}

const initDB = async () =>{
    initData.data = initData.data.map((obj)=>({...obj, owner: "68653847e41f547975e6bf66"}));

  await Listing.insertMany(initData.data);
    //console.log(initData.data[0]); 
    console.log("data was initialized");
};

initDB();
