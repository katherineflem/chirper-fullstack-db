//logic for get, put, delete chirps from backend 
import { Router } from 'express'
import db from './db'

const router = Router()

//GET REQUEST FOR CHIRPS

// router.get('/:id?', (req, res) => {
//     let id = req.params.id;
//     if (id) {
//         res.json(chirpstore.GetChirp(id))
//     } else {
//         let data = (chirpstore.GetChirps());
//         let chirpsArray = Object['keys'](data).map(key => {
//             return {
//                 id: key,
//                 name: data[key].name,
//                 message: data[key].message
//             }
//         });
//         chirpsArray.pop();
//         res.json(chirpsArray)
//     }
// })

//get all chirps
router.get('/', async (req, res) => {

    try {
        let chirps = await db.Chirpsdb.getAll();
        res.json(chirps);

    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})
//get one chirp
router.get(`/:id?`, async (req, res) => {
    try {
        let [chirp] = await db.Chirpsdb.getOne(req.params.id);
        res.json(chirp);
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})
//POST REQUEST FOR CHIRPS
// router.post('/', (req, res) => {
//     chirpstore.CreateChirp(req.body);
//     res.json('chirp added');
// })

router.post('/', async (req, res) => {
    try {
        let newChirp = await (db.Chirpsdb.post(req.body.name, req.body.text));
        res.json(newChirp);
        console.log(newChirp)
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})
//PUT REQUEST FOR CHIRPS
// router.put("/:id", (req, res) => {
//     let id = req.params.id;
//     let chirp = req.body;
//     res.send(chirpstore.UpdateChirp(id, chirp))
// })

router.put('/:id', async (req, res)=>{
    try {
        let id=req.params.id;
        let chirp=req.body.text;
       let r = await (db.Chirpsdb.edit(id,chirp));
       res.send(r)
    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
})

//DELETE CHIRP REQUEST
// router.delete('/:id', (req, res) => {
//     let id = req.params.id;
//     res.send(chirpstore.DeleteChirp(id))
// })

router.delete('/:id', async (req, res) => {
    try {
        let id= req.params.id
        res.send(db.Chirpsdb.deleteOne(id));
    }catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

//return all chirps a user is mentioned in 
//parameters userid
//result set should contain chirpid,chirp text, chirp date
//GET ONE USERS MENTIONS
router.get('/mentions/:userid', async (req, res)=>{
    try{
        let userid = req.params.userid
        let mentions= await (db.mentions.getMentions(userid));
        res.send(mentions)
    }catch(e){
        console.log(e);
        res.sendStatus(500)
    }
})

//GET ALL USERS 
router.get('/users', async (req, res)=>{
    try{
        let users= await (db.mentions.getUsers())
        res.json(users)
        console.log(users)
    }catch(e){
        console.log(e)
    }
})



export default router