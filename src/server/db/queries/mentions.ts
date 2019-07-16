import { Query } from '../index'

//want to create a third table called mentions
//procedure that returns all chirps that a user is mentioned in 


const getMentions =(userid:number)=>Query('call spUserMentions(?)', [userid])



export default{
    getMentions,
}