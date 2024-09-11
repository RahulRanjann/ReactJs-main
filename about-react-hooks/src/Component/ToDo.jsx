import React, { useState } from 'react'

function ToDo() {
    const [todo, setTodo] = useState("")
    const [list, setList] = useState([])

    var getData = (event) => {
        setTodo(event.target.value)
        console.log(event.target.value)
    }

    var setData = () =>{
        var store = [...list, todo]
        setList(store)
        setTodo("")
    }

    var deleteTask = (index) => {
        let filterData = list.filter((e, id) => {
            return id !== index
        })

        setList(filterData)
    }

  return (
    <div>
        <div className="app-container">
            <div className='input-container'>
                <input type="text" name="" id="" value={todo} placeholder='Enter Your Task' onChange={getData} />
            </div>
            <div className='done-btn'>
                <button type='button' onClick={setData}>+</button>
            </div>
        </div>
        <div className='task-container'>
            {list.map((ele,index) => (
                <table>
                    <tr>
                        <td>
                            {ele} 
                            <button className='edit' ><box-icon name='pencil' type='solid' color='#ffffff' ></box-icon></button>
                            <button className='delete' on onClick={() => deleteTask(index)} ><box-icon name='check' color='#ffffff' fontSize='xx-large' ></box-icon></button>
                        </td>
                    </tr>
                </table>
            ))}


                {/* <table>
                        <tr>
                            <td>
                                {list}
                            </td>
                            <td className='btn-remove'>
                                <div className='btn-container'>
                                    <div>
                                       
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
                            </td> 
                        </tr>
                </table> */}
        </div>
    </div>
  )
}

export default ToDo
