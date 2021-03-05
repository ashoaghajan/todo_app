import { AxiosResponse } from 'axios';
import * as api from '../api/todoApi';

export const getTodos = (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => async(dispatch: Dispatch) => {
  try{
      const { data } = await api.getData();
      setLoading(false);
      dispatch({ type: 'GET_TODOS', payload: data });
  }
  catch(err){
      console.log(err.message);
  }
}

export const getSingleTodo = (id: string) => async(dispatch: Dispatch) => {
  try{
      const { data } = await api.getSingleData(id);
      dispatch({ type: 'GET_SINGLE_TODO', payload: data })
  }
  catch(err){
      console.log(err.message);
  }
}

export const clearSingleTodo = () => (dispatch: Dispatch) => {
    dispatch({ type: 'CLEAR_SINGLE_TODO', payload: null })
}

export const addTodo = (newTodo: TodoToAdd) => async(dispatch: Dispatch) => {
  try{
      const { data } = await api.postData(newTodo);
      dispatch({ type: 'CREATE_TODO', payload: data })
  }
  catch(err){
      console.log(err.message);
  }
}

export const deleteTodo = (id: string) => async(dispatch: Dispatch) => {
  try{
      await api.deleteData(id);
      dispatch({ type: 'DELETE_TODO', payload: id })
  }
  catch(err){
      console.log(err.message);
  }
}

export const deleteAllTodos = (idList: string[]) => async(dispatch: Dispatch) => {
    const promises: Promise<AxiosResponse<any>>[] = []
    try{
        idList.forEach(id => promises.push(api.deleteData(id)));
        await Promise.all(promises);
        dispatch({ type: 'DELETE_ALL_TODOS', payload: null })
    }
    catch(err){
        console.log(err.message);
    }
  }

export const updateTodo = (id: string, updatedTodo: TodoToAdd) => async(dispatch: Dispatch) => {
  try{
      const { data } = await api.patchData(id, updatedTodo);
      dispatch({ type: 'UPDATE_TODO', payload: data })
  }
  catch(err){
      console.log(err.message);
  }
}