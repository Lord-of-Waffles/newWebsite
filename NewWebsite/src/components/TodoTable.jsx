

function TodoTable(props) {
    return (
        <table>
            <tbody>
                {/*<tr>
                    <th>Description</th>
                    <th>Date</th>

                </tr>*/}
                {/*
                    props.todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.description}</td>
                            <td>{todo.dueDate}</td>
                            <td><button onClick={() => props.popArray(index)}>Done</button></td>
                        </tr>
                    )
                */}
            </tbody>
        </table>
    )

}

export default TodoTable;