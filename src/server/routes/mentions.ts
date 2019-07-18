import { Router } from 'express'
import db from '../db'

const router= Router()

//GET ONE USERS MENTIONS
router.get('/:userid', async (req, res)=>{
    try{
        let userid = req.params.userid
        let mentions= await (db.mentions.getMentions(userid));
        res.json(mentions[0])
    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
})

export default router