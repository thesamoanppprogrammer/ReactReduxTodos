import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../../store/todos-actions';
import { getTodo } from '../../store/todos-actions';
import { useEffect, useState } from 'react';

const EditTodo = (props) => {
    const dispatch = useDispatch();
    const { id } = useParams();

    // useEffect(() => {
    //     dispatch(getTodo(id));

    //     //console.log("Get todo");
    //   }, [dispatch]);

    //   const todoItem = useSelector((state) => state.todos.todo);

      //todoItem ? todoItem.todo.todo : ""

    const [enteredTodo, setEnteredTodo] = useState("");
    const [enteredCompleted, setEnteredCompleted] = useState(false);

    useEffect(() => {
        setEnteredTodo(localStorage.getItem('TODO'));
        setEnteredCompleted(localStorage.getItem('COMPLETED'));
    }, []);

    const todoChangeHandler = (event) => {
        setEnteredTodo(event.target.value);
      };
    
      const completedChangeHandler = (event) => {
        setEnteredCompleted(event.target.checked);
      };

    const deleteTodoHandler = () => {
        if (window.confirm("Delete this todo?")) {
          dispatch(deleteTodo(id));
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();
    
        const todoData = {
          todo: enteredTodo,
          completed: enteredCompleted,
        };

        console.log(todoData);

        //dispatch(createTodo(todoData));
    
        //props.onSaveExpenseData(expenseData);
        //setEnteredTodo('');
        // setEnteredCompleted(false);
      };

    return (
        <div className="container-fluid clearfix">
            <button style={{float: "right"}} className="btn btn-danger" onClick={deleteTodoHandler}>Delete</button>
            <h2>Edit Todo</h2>

            <form onSubmit={submitHandler}>
                <div class="mb-3">
                    <label htmlFor="todo" className="form-label">Todo</label>
                    <input type="text" className="form-control"
                        value={enteredTodo}
                        onChange={todoChangeHandler} 
                        id="todo" placeholder="Todo"/>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"
                        checked={enteredCompleted}
                        onChange={completedChangeHandler}  id="completed"/>
                    <label className="form-check-label" htmlFor="completed">
                        Default checkbox
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    );
};

export default EditTodo;