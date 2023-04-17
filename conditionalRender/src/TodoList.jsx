
function Item({name,isDone}){
    return (
        <>
        <li className="item">
          {isDone ? name + ' ✔' : name}
        </li>
        </>
      );
}
export default function TodoList(){
    return(
        <>
            <h1>Conditional Rendering Task</h1>
            <h2>ToDo List items</h2>
            <ul>
                <Item
                    isDone={true}
                    name='Item 1'
                />
                <Item
                    isDone={true}
                    name='Item 2'
                />
                <Item
                    isDone={false}
                    name='Item 3'
                />
            
            </ul>
        </>
    )
}