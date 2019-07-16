
import {Query} from '../index'

const getAll=()=> Query('SELECT users.id, users.name from users')

export default{
    getAll
}