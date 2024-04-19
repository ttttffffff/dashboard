import React ,{useState} from 'react'
import Board, { moveCard, moveColumn, removeCard, addCard } from "@asseinfo/react-kanban"
import "@asseinfo/react-kanban/dist/styles.css"
import useBoard from '../../store/Board'
import './Board.css'
import { RxCross2 } from 'react-icons/rx'
import { IoMdAdd } from 'react-icons/io'
import AddCardModal from '../../components/AddCardModal/AddCardModal'
import {addCardAPI,deleteCardAPI,updateCardAPI} from '../../api/board'
import { nanoid } from 'nanoid'

export default function BoardPage() {
    const { board, setBoard } = useBoard()
    const handleCardMove = (_card, source, destination) => {
        const card={
            ..._card,
            boardID:destination.toColumnId
        }
        updateCardAPI(card.id,card).then(res=>{
            if(res.data.code!==0) throw res
            const updatedBoard = moveCard(board, source, destination)
            setBoard(updatedBoard)
        }).catch(err=>{
            console.log('err in moving card:',err)
        })
        
    }
    const handleColumnMove = (_card, source, destination) => {
        const updatedBoard = moveColumn(board, source, destination)
        setBoard(updatedBoard)
    }
    const getColumn = (card) => {
        const bid=card.boardID
        const column = board.columns[bid-1]
        return column
    }
    const getGradient = (card) => {
        const column = getColumn(card)
        const title = column.title
        if (title === "TODO") {
            return {
                background: "linear-gradient(65.35deg, rgba(65,65,65,0.67) -1.72%,rgba(48,189,220) 163.54%"
            }
        }
        else if (title === "Doing") {
            return {
                background: "linear-gradient(65.35deg,rgba(65,65,65,0.67) -1.72%, rgba(220,48,48) 163.54%"
            }
        }
        else if (title === "Completed") {
            return {
                background: "linear-gradient(65.35deg,rgba(65,65,65,0.67) -1.72%,rgba(48,220,86) 163.54%"
            }
        }
        else if (title === "Backlog") {
            return {
                background: "linear-gradient(65.35deg, rgba(65,65,65,0.67) -1.72%,rgba(134,48,220) 163.54%"
            }
        }
    }
    
    return (

        <div className="board-container">
            <span>Trello Board</span>
            <Board
                allAddColumn
                allowRenameColumn
                allowRemoveCard
                onCardDragEnd={handleCardMove}
                onColumnDragEnd={handleColumnMove}
                renderCard={(props) => (
                    <div className='kanban-card' style={getGradient(props)}>
                        <div>
                            <span>{props.title}</span>
                            <button className='remove-button' type='button'
                                onClick={() => {
                                    deleteCardAPI(props.id).then(res=>{
                                        if(res.data.code!==0) throw res
                                        const updatedBoard = removeCard(board, getColumn(props), props)
                                        setBoard(updatedBoard)
                                    }).catch(err=>{
                                        console.log('err in delete card:',err)
                                    })
                                    
                                }} >
                                <RxCross2 color="white" size={15} />
                            </button>
                        </div>
                        <span>{props.description}</span>
                    </div>
                )}
                renderColumnHeader={(props) => {
                    //这里为每一列都渲染了一个添加函数，所以会有四个props,所以在每一列中添加的时候，直接得到列id
                    //console.log(props)
                    const [modalOpened,setModalOpened]=useState(false)
                    const handleCardAdd=(title,detail)=>{
                        const card={
                            id:nanoid(),
                            title,
                            description:detail,
                            boardID:props.id
                        }
                        addCardAPI(card).then(res=>{
                            if(res.data.code!==0) throw res
                            const updatedBoard=addCard(board,props,card)
                            setBoard(updatedBoard)
                            setModalOpened(false)
                        }).catch(err=>{
                            console.log('err in add card: ',err)
                            setModalOpened(false)
                        })

                        // const updatedBoard=addCard(board,props,card)
                        // setBoard(updatedBoard)
                        
                    }
                    return (
                        <div className='column-header'>
                            <span>{props.title}</span>
                            <IoMdAdd
                                color="var(--grey)"
                                size={25}
                                title="Add card"
                                onClick={()=>setModalOpened(true)}

                            />
                            <AddCardModal visible={modalOpened} 
                            onClose={()=> setModalOpened(false)}
                            handleCardAdd={handleCardAdd}
                            />
                        </div>
                    )
                }}
            >
                {board}
            </Board>
        </div>
    )
}
