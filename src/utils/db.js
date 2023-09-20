import mongoose from "mongoose";

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("sucessfully connected to the mongo database")
    }catch(e){
        throw new Error("Connection to mongodb failed")
    }
}

export default connect;