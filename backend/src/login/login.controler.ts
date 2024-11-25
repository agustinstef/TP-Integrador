import { Request, Response, NextFunction } from "express";
import { Admin } from "../admin/admin.entity.js";
import { Participante } from "../participante/participante.entity.js";
import { orm } from "../shared/db/orm.js";
import bcrypt from 'bcrypt'
import  jwt  from "jsonwebtoken";
import { Loaded } from "@mikro-orm/core";

const em = orm.em

async function login(req: Request, res: Response){
    const { mail, contraseña } = req.body
    let user: Loaded<Admin, never, "*", never> | Loaded<Participante, never, "*", never> | null = null;
    
    user = await em.findOne(Admin, {mail: mail}) 
    
    if(!user){
        user = await em.findOne(Participante, {mail: mail})
        if(!user){
            return res.status(400).json({message: 'No se encontró un admin con ese mail en la base de datos'})
        }
    }

    const validacionContraseña = await bcrypt.compare(contraseña, user.contraseña)

    if(!validacionContraseña){
        return res.status(400).json({message: 'Contraseña incorrecta'})
    }
    
    const token = jwt.sign({mail: mail}, process.env.SECRET_KEY || 'pepitos123')
    const rol = user.rol
    const data = {token, rol}
    return res.json({data})
}

export {login}