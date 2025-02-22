// import mongoose from "mongoose";
// const connectDB=(handler)=>async(req,res)=>{
//   try{
//         if(mongoose.connectionreadyState===1){
//             return handler(req,res)
//         }
//         await mongoose.connect(process.env.MONGO_URI)
//     }catch(error){
//         console.log(error)
//     }
// }
// export default connectDB;















import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            console.log("Already connected to MongoDB");
            return;
        }
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Database Connection Error:", error);
    }
};

export default connectDB;
