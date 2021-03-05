import { Typography } from '@material-ui/core';
import TodoModal from './components/TodoModal';
import ListTodos from './components/ListTodos';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAllTodos } from './redux/todoActions';
import { Button } from '@material-ui/core';

function App() {

  const todos = useSelector((state: TodoState) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = () => {
    if(todos.length){
      const idList = todos.map(todo => todo._id);
      dispatch(deleteAllTodos(idList));
    }
  }

  return (
    <div>
      <Typography variant='h3'>Todo List</Typography>
      <TodoModal />
      <ListTodos />
      {todos.length ? <Button type="button" color='secondary' variant='contained' size='small' 
        onClick={handleDelete} style={{ margin: 30 }}>
        Clear the List
      </Button> : null}
    </div>
  );
}

export default App;
