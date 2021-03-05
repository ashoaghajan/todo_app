import React from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from '../redux/todoActions';
import useStyles from '../styles/listTodoStyles';
import Todo from './Todo';

export interface ListTodossProps {
    
}
 
const ListTodoss: React.SFC<ListTodossProps> = () => {

    const todos = useSelector((state: TodoState) => state.todos);
    const dispatch = useDispatch();
    const classes = useStyles();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        dispatch(getTodos(setLoading));
        // eslint-disable-next-line
    },[]);

    return ( 
        <Grid container spacing={1} className={classes.container}>
            {loading ? <CircularProgress /> : todos.length ? todos.map(todo => (
                <Grid item key={todo._id} lg={8} sm={10}>
                    <Todo todo={todo}/>
                </Grid>
            )) : <Typography>no todos</Typography>}
        </Grid>
     );
}
 
export default ListTodoss;