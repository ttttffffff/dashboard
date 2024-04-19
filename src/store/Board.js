import {create} from 'zustand';
// import { boardData } from '../data';
import {getCards} from '../api/board'
let boardData = {columns:[]}
const fetch = async () => {
    const res = await getCards()
    if (res.data.code !== 0) {
        throw res
    }
    return res.data.data
}
boardData.columns = await fetch()
const useBoard=create((set)=>({
    board:boardData,
    setBoard:(board)=>set({board}),
    }))
export default useBoard