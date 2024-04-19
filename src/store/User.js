import {create} from 'zustand';
// import { boardData } from '../data';
import {getUsers} from '../api/user'

const fetch = async () => {
    const res = await getUsers()
    if (res.data.code !== 0) {
        throw res
    }
    return res.data.data
}
let userData = await fetch()
const useUser=create((set)=>({
    user:userData,
    setUser:(user)=>set({user}),
    }))
export default useUser