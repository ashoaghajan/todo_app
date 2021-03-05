import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from '../styles/todoModalStyles';
import { emptyTodo } from '../global/globalVariables';
import { addTodo, getSingleTodo, updateTodo, clearSingleTodo } from '../redux/todoActions';

export const useTodoModal = (id: string | undefined) => {
    const classes = useStyles();
    const singleTodo = useSelector((state: TodoState) => state.singleTodo);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [state, setState] = useState(emptyTodo);

    useEffect(() => {
        if(id && singleTodo){
            setState(singleTodo);
        }
        else{
            setState(emptyTodo);
        }
    },[id, singleTodo])

    const handleOpen = () => {
        setOpen(true);
        id && dispatch(getSingleTodo(id));
    };
    
    const handleClose = () => {
        setOpen(false);
        setState(emptyTodo);
        id && dispatch(clearSingleTodo());
    };

    const handleChange = (e: any) => {

        const { name, value } = e.target;
        const key = name!;
        setState(prevState => ({
            ...prevState,
            [key]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        id ? dispatch(updateTodo(id, state)) : dispatch(addTodo(state));
        handleClose();
    }

    return { open, classes, state, handleChange, handleClose, handleOpen, handleSubmit }
}