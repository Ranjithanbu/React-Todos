import React, { useState, useEffect } from 'react';
import InputComponent from './component/InputComponent';
import Display from './component/Display';

const App = () => {
  let [todo, setTodo] = useState([])
  let [filtered, setFiltered] = useState([])
  let [mainOpt, setMainOpt] = useState("all")

  //creating new task

  const createTodo = (newTitle, newDescription, completeStatus) => {
    const data = {
      id: todo.length + 1,
      title: newTitle,
      description: newDescription,
      complete: completeStatus

    }
    setTodo([...todo, data])
  }

  //deleting the task
  const delTask = (id) => {
    setTodo(todo.filter((todos) => todos.id !== id))
  }


  // editing the task

  const editTodos = (id, editTitle, editDesc) => {

    setTodo(todo.map((item) => ({

      id: item.id === id ? id : item.id,
      title: item.id === id ? editTitle : item.title,
      description: item.id === id ? editDesc : item.description

    })))

  }

  // handling selction 

  const handleChange = (e) => {
    let val = e.target.value

    setMainOpt(val)
  }

  useEffect(() => {

    if (mainOpt == 'all') {
      setFiltered(todo)
      console.log('1stblock')
    }

    else if (mainOpt == 'Pending') {

      console.log('2rdblock')
      setFiltered(todo.filter((items) => items.complete === 'false'))
    }

    else if (mainOpt == 'completed') {

      console.log('3rdblock')
      setFiltered(todo.filter((items) => items.complete === 'true'))
    }
  }, [todo, mainOpt])

  console.log(filtered);

  const handleToggle = (target, ide) => {


    setTodo(todo.map((item) => ({
      ...item,
      complete: item.id === ide ? target : item.complete

    })))

  }


  //console.log(todo)
  return (
    <div className="container  rounded mt-4">

      <InputComponent createTodo={createTodo} />
      <div className="text-end">
        <select onChange={handleChange}>
          <option value={'all'} >All</option>
          <option value={'Pending'}>Pending</option>
          <option value={'completed'}>completed</option>
        </select>

        <hr className=" border-2 border-white opacity-75 " />

      </div>

      <div className="d-flex flex-row flex-wrap justify-content-center">
        {filtered.map((item, index) => {

          return (
            <div className='m-3' key={index}>
              <Display item={item} delTask={delTask} editTodos={editTodos} handleToggle={handleToggle} />
            </div>

          )
        })}
      </div>
    </div>
  );
};

export default App;