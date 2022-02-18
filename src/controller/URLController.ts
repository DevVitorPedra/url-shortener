import { NextFunction, Request, Response } from "express";
import shortid from 'shortid';
import { config } from "../config/Constants";
import { URLModel } from "../model/URL";
export class URLController{
     async shorten(req:Request, res:Response, next: NextFunction):Promise<void>{
        const { originURL } = req.body
        const hash = shortid.generate()
        const shortURL = `${config.API_URL}/${hash}`

        res.json({originURL,hash,shortURL})

    }   
    async redirect(req:Request, res:Response, next: NextFunction):Promise<void>{
        const { hash } = req.params

        const url = URLModel.findOne({hash})
        if(url){
        res.redirect(url.originURL)
        return
        }
      res.status(400).send("Url not found")
    }

}