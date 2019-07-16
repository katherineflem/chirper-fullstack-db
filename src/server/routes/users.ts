import { Router } from 'express';
import db from '../db'

//make express router middleware
const router= Router();

router.get('/', async (req, res)=>{
    try{
        let users= await (db.users.getAll())
        console.log(users)//console logs above r.json()
        res.json(users)
    }catch(e){
        console.log(e)
    }
})

export default router;