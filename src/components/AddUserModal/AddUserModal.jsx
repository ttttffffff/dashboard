import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
} from '@mui/material';
import Rodal from 'rodal'
import "rodal/lib/rodal.css"
import css from './AddUserModal.module.css'


export default function AddUserModal({ open, columns, onClose, onSubmit }) {
    const [values, setValues] = useState(() =>
        columns.reduce((acc, column) => {
            acc[column.accessorKey ?? ''] = '';
            return acc;
        }, {}),
    );

    const handleSubmit = () => {
        //put your validation logic here
        onSubmit(values);
        onClose();
    };
    const customStyles = {
        background: 'rgba(58,58,58)',
        padding: '20px',
        width: '50%',
        top: '-3rem',
        height: 'fit-content',
        maxWidth: '40rem',
    }

    return (
        <div>
            {/* <Rodal customStyles={customStyles} visible={open} onClose={onClose}>
                <div className={css.container}>
                    {columns.map((column) => (
                        <TextField
                            key={column.accessorKey}
                            label={column.header}
                            name={column.accessorKey}
                            onChange={(e) =>
                                setValues({ ...values, [e.target.name]: e.target.value })
                            }
                        />
                    ))}
                    <button className={css.saveButton}
                        disabled={title === "" && detail === ""}
                        onClick={() => {
                            handleCardAdd(title, detail)
                            setDetail("")
                            setTitle("")
                        }}
                    >Add</button>
                </div>
            </Rodal> */}

            <Dialog open={open} className={css.container}>
                <DialogTitle textAlign="center" style={{fontSize:'1.1rem',marginBottom:'1.2rem'}}>Create New User</DialogTitle>
                <DialogContent>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <Stack
                            sx={{
                                width: '100%',
                                padding:'10px',
                                minWidth: { xs: '300px', sm: '360px', md: '400px' },
                                gap: '1.5rem',
                            }}
                        >
                            {columns.map((column) => (
                                column.header!=='ID'&&(<TextField
                                    key={column.accessorKey}
                                    label={column.header}
                                    name={column.accessorKey}
                                    className={css.text}  
                                    style={{boxShadow:'none!important'}}                             
                                    onChange={(e) =>
                                        setValues({ ...values, [e.target.name]: e.target.value })
                                    }
                                />)
                            ))}
                        </Stack>
                    </form>
                </DialogContent>
                <DialogActions sx={{ p: '1.25rem' }}>
                    <Button onClick={onClose} className={css.cancelButton}>Cancel</Button>
                    <Button color="secondary" onClick={handleSubmit} variant="contained" className={css.saveButton}>
                        ADD
                    </Button>
                </DialogActions>
            </Dialog>
            </div>
    );
}
