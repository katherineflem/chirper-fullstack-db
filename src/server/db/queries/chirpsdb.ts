//file for chirps table

//import query helper function
import { Query } from '../index'

//query functions that take in string from db call and an optional value []
const getAll= ()=>Query("SELECT users.name, chirps.* FROM chirps JOIN users ON chirps.userid= users.id")

const getOne= (id: number)=>Query("SELECT users.name, chirps.* from chirps JOIN users ON chirps.userid=users.id WHERE chirps.id=?", [id])

const post = (userid: number, text: string)=>Query('INSERT INTO chirps (userid, text) VALUES (?)', [[userid, text]])

const deleteOne = (id: number)=> Query('DELETE FROM chirps WHERE id=?', [id])

const edit = (id:number, text:string)=>Query('UPDATE chirps SET text=? WHERE id=?', [text, id])

//want to create a third table called mentions
//procedure that returns all chirps that a user is mentioned in 


export default {
    getAll,
    getOne,
    post,
    deleteOne,
    edit,
}