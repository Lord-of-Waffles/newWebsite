import TodoTable from './TodoTable';
import { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the Data Grid

function Todolist() {
    const [todo, setTodo] = useState({ description: "", dueDate: "", priority: "" });
    const [todos, setTodos] = useState([]);

    const [colDefs, setColDefs] = useState([
        { field: "description", filter: "true" },
        {
            field: "priority",
            cellStyle: params => {
                if (params.value === "High" || params.value === "high") {
                    return { color: "red" };
                } else if (params.value === "Medium" || params.value === "medium") {
                    return { color: "orange" };
                } else if (params.value === "Low" || params.value === "low") {
                    return { color: "green" };
                } else {
                    return { color: "black" };
                }
            }
        },
        { field: "dueDate" }
    ]);

    const gridRef = useRef();

    const appendArray = () => {
        if (!todo) {
            alert("Please fill all the fields!");
        } else {
            setTodos([todo, ...todos]);
            setTodo({ description: "", dueDate: "", priority: "" });
        }
    };

    const popArray = () => {
        setTodos(todos.filter((todo, index) =>
            index != gridRef.current.getSelectedNodes()[0].id))
    };

    return (
        <>
            <h3>To-Do list using AG-Grid</h3>
            <h4>By Ben Worton</h4>
            <input
                placeholder='Description'
                value={todo.description}
                onChange={event => setTodo({ ...todo, description: event.target.value })}
            />

            <input
                placeholder='Priority'
                value={todo.priority}
                onChange={event => setTodo({ ...todo, priority: event.target.value })}
            />

            <input
                placeholder='Due date'
                type='date'
                value={todo.dueDate}
                onChange={event => setTodo({ ...todo, dueDate: event.target.value })}
            />

            <button onClick={appendArray}>
                Add Task
            </button>
            <button onClick={popArray}>
                Remove Task
            </button>

            <TodoTable todos={todos} popArray={popArray} />

            <div className='ag-theme-material' style={{ height: 500, width: '100%' }}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowData={todos}
                    columnDefs={colDefs}
                    rowSelection='single'
                />
            </div>
        </>
    );
}

export default Todolist;
