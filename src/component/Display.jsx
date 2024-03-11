import React, { useState } from 'react';
const Display = ({ item, delTask, editTodos, handleToggle }) => {

  const dummyId = `#${item.id}`

  const [editTitle, setEditTitle] = useState(item.title)
  const [editDesc, setEditDesc] = useState(item.description)
  const [optionVal, setOptionVal] = useState(false)
  //passing new edited value 

  const handleEdit = (id) => {
    console.log(id)
    editTodos(id, editTitle, editDesc)
    setEditTitle('')
    setEditDesc('')
  }

  const handleOption = (target, ide) => {


    handleToggle(target, ide)
    //console.log();  



  }


  return (
    <div>
      <div className="card bg-secondary text-center" style={{ width: "18rem", height: "18rem" }}>
        <h5 className="m-2">id:{item.id}</h5>
        <h5 className="m-2">title:{item.title}</h5>
        <h5 className="m-2">description:{item.description}</h5>
        <select name="completion" value={item.complete} className="m-2 bg-transparent rounded border-1 mx-auto " style={{ width: "9rem" }} onChange={(e) => { handleOption(e.target.value, item.id) }} id="completeStatus">
          <option value={'false'}>pending</option>
          <option value={'true'}>completed</option>
        </select>

        <div>
          {/* <!-- Button trigger modal --> */}
          <button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target={dummyId}>
            Edit
          </button>

          {/* modal block */}

          <div class="modal fade" id={item.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5 ms-auto" id="exampleModalLabel">Edit Task</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                 <label className='h6' htmlFor="title">Task</label><input type="text" name='title' className='d-block border-2 border rounded mx-auto mb-2' value={editTitle} onChange={(e) => { setEditTitle(e.target.value) }} />
                 <label className='h6' htmlFor="description">Description</label> <input type="text" name='description' className='d-block border-2 border rounded mx-auto mt-2' value={editDesc} onChange={(e) => { setEditDesc(e.target.value) }} />

                </div>
                <div class="modal-footer">

                  <button type='submit' class="btn btn-primary mx-auto" data-bs-dismiss="modal" onClick={() => { handleEdit(item.id) }} >Update</button>
                </div>
              </div>

            </div>
          </div>


        </div>
        <button className='btn btn-warning m-2 mx-auto' style={{ width: "6rem" }} onClick={() => { delTask(item.id) }}>Delete</button>
      </div>
    </div>
  );
};

export default Display;