import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Typography, Button } from '@material-ui/core';
import useStyles from '../styles/todoStyles';
import { deleteTodo } from '../redux/todoActions';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import TodoModal from './TodoModal';

export interface TodoProps {
    todo: Todo
}
 
const Todo: React.SFC<TodoProps> = ({ todo }) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    return ( 
        <Card className={classes.card} style={{ border: `5px solid ${todo.color}` }}>
            <Typography variant='h6' className={classes.header}>{todo.title}</Typography>
            <Typography className={classes.body} variant='body1' gutterBottom>{todo.description}</Typography>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <TodoModal id={todo._id}/>
                <Button className={classes.button} type="button" color='secondary' variant='contained' size='large' onClick={() => dispatch(deleteTodo(todo._id))}>
                    <DeleteForeverIcon />
                </Button>
            </div>
        </Card>
     );
}
 
export default Todo;