import React from 'react';
import { TextField, Button, Paper, InputLabel, Select, MenuItem, Modal, TextareaAutosize, Grid } from '@material-ui/core';
import { modalStyle, colors } from '../global/globalVariables';
import { useTodoModal } from '../hooks/useTodoModal';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

export interface TodoModalProps {
    id?: string
}
 
const TodoModal: React.SFC<TodoModalProps> = ({ id }) => {

    const { open, classes, state, handleChange, handleClose, handleOpen, handleSubmit } = useTodoModal(id);

    const body = (
        <Paper style={modalStyle} className={classes.paper}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={3} style={{ justifyContent: 'flex-end' }}>
                    <Grid item xs={12}>
                        <TextField name='title' variant='outlined' label="Title" 
                            value={state.title} onChange={handleChange} fullWidth required/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextareaAutosize name='description' className={classes.textArea} placeholder='Description' 
                            value={state.description} onChange={handleChange} rowsMin={3} required/> 
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel id="color" >Select Color</InputLabel>
                        <Select className={classes.select} fullWidth labelId='color' name='color' 
                            value={state.color} onChange={handleChange} required>
                            {colors.map((option, index) => (
                                <MenuItem value={option} key={index} style={{ color: option }}>{option}</MenuItem>
                            ))}
                        </Select> 
                    </Grid>
                    <br />
                    <Button color='default' variant='contained' size='large' type='button' className={classes.button} onClick={() => handleClose()}>
                        Cancel
                    </Button>
                    <Button color='primary' variant='contained' size='large' type='submit' className={classes.button}>
                        Submit
                    </Button>
                </Grid>
            </form>
        </Paper>
    )

    return ( 
        <div>
            <Button type="button" color={id ? 'primary' : 'default'} variant='contained' className={classes.button} size='large' onClick={handleOpen}>
                {id ? <EditIcon /> : <AddIcon />}
            </Button>
            <Modal open={open}>
                {body}
            </Modal>
        </div>
    );
}
 
export default TodoModal;
