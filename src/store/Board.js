import {create} from 'zustand';
import { boardData } from '../data';
const useboard=create((set)=>({
    board:boardData,
    setBoard:(board)=>set({board}),
    
        
    }))
export default useboard