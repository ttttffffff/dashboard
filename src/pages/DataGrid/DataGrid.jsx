import React, { useCallback, useMemo, useState } from 'react'
import './DataGrid.css'
import MaterialReactTable from "material-react-table"
import {
    Box,
    Button,
    IconButton,
    Tooltip,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import useUser from '../../store/User'
import { updateUser, addUser,deleteUser } from '../../api/user'
import AddUserModal from '../../components/AddUserModal/AddUserModal'
import { nanoid } from 'nanoid';

export default function DataGrid() {
    const { user, setUser} = useUser()
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const columns = useMemo(() => [
        {
            accessorKey: 'id',
            header: 'ID',
            enableColumnOrdering: false,
            enableEditing: false, //disable editing on this column
            enableSorting: false,
            enableHiding: true
        },
        {
            accessorKey: "name.firstName",
            header: 'First Name',

        },
        {
            accessorKey: "name.lastName",
            header: 'Last Name'
        },
        {
            accessorKey: "address",
            header: 'Address'
        },
        {
            accessorKey: "city",
            header: 'City'
        },
        {
            accessorKey: "state",
            header: 'State'
        }
    ], [user])
    const theme = useMemo(() => createTheme({
        palette: {
            mode: 'dark'
        }
    }), [])
    // const handleSaveCell = (cell, value) => {
    //     const editcolumn = cell.column.id
    //     const newUser = {
    //         ...cell.row.original,
    //     }
    //     if (editcolumn === 'name.lastName') {
    //         newUser.name.lastName = value
    //     } else if (editcolumn === 'name.firstName') {
    //         newUser.name.firstName = value
    //     } else {
    //         newUser[editcolumn] = value
    //     }
    //     console.log(newUser)
    //     updateUser(cell.row.original.id, newUser).then(res => {
    //         if (res.data.code !== 0) {
    //             throw res
    //         }
    //         const newUserTable = [...user]
    //         newUserTable[cell.row.index] = newUser
    //         setUser(newUserTable)
           
    //     }).catch(err=>{
    //         console.log('err in update user: ',err)
    //     })
    // }
    const handleCreateNewRow = (values) => {
        //todo:
        const newUser = {
            id: nanoid(),
            name: {
                firstName: values["name.firstName"],
                lastName: values["name.lastName"],
            },
            city: values.city,
            address: values.address,
            state: values.state
        }
        addUser(newUser).then(res => {
            if (res.data.code !== 0) {
                throw res
            }
            setUser([...user, newUser])
        }).catch(err => {
            console.log('err in add user: ', err)
        })
    }
    const handleDeleteRow = useCallback(
        (row) => {
            if (
                !confirm(`Are you sure you want to delete ${row.getValue('name.firstName')}`)
            ) {
                return;
            }
            //send api delete request here, then refetch or update local table data for re-render
              deleteUser(row.getValue('id')).then(res=>{
                if(res.data.code!==0){
                    throw res
                }
                const newUserTable=[...user]
                newUserTable.splice(row.index, 1);
                setUser(newUserTable);
              }).catch(err=>{
                console.log('err in delete user: ',err)
              })

        },
        [user],
    );
    const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
        const newUser={
            id: row.original.id,
            name: {
                firstName: values["name.firstName"],
                lastName: values["name.lastName"],
            },
            city: values.city,
            address: values.address,
            state: values.state
        }
        updateUser(row.original.id,newUser).then(res => {
            if (res.data.code !== 0) {
                throw res
            }
            const newUserTable = [...user]
            newUserTable[row.index] = newUser
            setUser(newUserTable)
            exitEditingMode()
        }).catch(err=>{
            console.log('err in update user: ',err)
            exitEditingMode()
        })
      };
    
      const handleCancelRowEdits = () => {
        return
      };

    return (
        <div className="table-container">
            <ThemeProvider theme={theme}>
                <MaterialReactTable columns={columns} data={user}
                    initialState={{ columnVisibility: { id: false } }}
                    editingMode='modal'
                    enableEditing
                    // muiTableBodyCellEditTextFieldProps={({ cell }) => ({
                    //     onBlur: (event) => {
                    //         handleSaveCell(cell, event.target.value)
                    //     }
                    // })}
                    onEditingRowSave={handleSaveRowEdits}
                    onEditingRowCancel={handleCancelRowEdits}
                    renderRowActions={({ row, table }) => (
                        <Box sx={{ display: 'flex', gap: '1rem' }}>
                            <Tooltip arrow placement="left" title="Edit">
                                <IconButton onClick={() => table.setEditingRow(row)}>
                                    <Edit />
                                </IconButton>
                            </Tooltip>
                            <Tooltip arrow placement="right" title="Delete">
                                <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                                    <Delete />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    )}
                    renderTopToolbarCustomActions={() => (
                        <Button
                            color="secondary"
                            onClick={() => setCreateModalOpen(true)}
                            variant="contained"
                            className='createButton'
                        >
                            Create New Account
                        </Button>
                    )}
                />
                <AddUserModal
                    columns={columns}
                    open={createModalOpen}
                    onClose={() => setCreateModalOpen(false)}
                    onSubmit={handleCreateNewRow}
                />
            </ThemeProvider>

        </div>
    )
}
