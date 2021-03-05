import axios from 'axios';

const API = axios.create({ baseURL: 'https://todo.eachbase.com/api/AshotAghajanyan' });

export const getData = () => API.get('/todos');
export const getSingleData = (id: string) => API.get(`/todos/${id}`);
export const postData = (newPost: TodoToAdd) => API.post('/todos', newPost);
export const deleteData = (id: string) => API.delete(`todos/${id}`);
export const patchData = (id: string, updatedTodo: TodoToAdd) => API.patch(`/todos/${id}`, updatedTodo);
