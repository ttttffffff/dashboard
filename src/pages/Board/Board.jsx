import React ,{useState} from 'react'
import Board, { moveCard, moveColumn, removeCard, addCard } from "@asseinfo/react-kanban"
import "@asseinfo/react-kanban/dist/styles.css"
import useBoard from '../../store/Board'
import './Board.css'
import { RxCross2 } from 'react-icons/rx'
import { IoMdAdd } from 'react-icons/io'
import AddCardModal from '../../components/AddCardModal/AddCardModal'
export default function BoardPage() {
    const { board, setBoard } = useBoard()
    const handleCardMove = (_card, source, destination) => {
        const updatedBoard = moveCard(board, source, destination)
        setBoard(updatedBoard)
    }
    const handleColumnMove = (_card, source, destination) => {
        const updatedBoard = moveColumn(board, source, destination)
        setBoard(updatedBoard)
    }
    const getColumn = (card) => {
        const column = board.columns.filter((column) => column.cards.includes(card))
        return column[0]
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
                                    const updatedBoard = removeCard(board, getColumn(props), props)
                                    setBoard(updatedBoard)
                                }} >
                                <RxCross2 color="white" size={15} />
                            </button>
                        </div>
                        <span>{props.description}</span>
                    </div>
                )}
                renderColumnHeader={(props) => {
                    const [modalOpened,setModalOpened]=useState(false)
                    const handleCardAdd=(title,detail)=>{
                        const card={
                            id:new Date().getTime(),
                            title,
                            description:detail
                        }
                        const updatedBoard=addCard(board,props,card)
                        setBoard(updatedBoard)
                        setModalOpened(false)
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
