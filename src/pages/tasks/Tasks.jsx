import TodoList from "../../components/Tasks/TodoList";
import Topbar from "../../components/topbar/Topbar";
import "./tasks.css";

function Tasks(){
    return (
        <>
        <Topbar/>
        <div className='todo-app'>
      <TodoList />
    </div>
        </>
    );
}

export default Tasks;