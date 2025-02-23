import { Router,Request,Response } from "express";
import { getUserById } from "./controller";
import { validateUserId } from "./validator";

export const userRouter = Router();

const getSingleUserService = async (req:Request,res:Response)=>{
        try{
        const userId = req.params.id;
        const user = await getUserById(userId);
        if(!user){
            res.json({ error: true,code:400 ,data:null,message:"User Not Found"});
            return ;
        }
        res.json({
            error:false,
            code:200,
            data:user,
            message:"Fetched user successfully"
        });
    
        }
        catch(error){
            console.log("error : ",error)
            res.json({
                 error: true,code:400 ,data:null,message:error.message
            });
        }
    } 


userRouter.get("/:id",validateUserId,getSingleUserService )


