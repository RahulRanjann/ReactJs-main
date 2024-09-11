import React from 'react';

export default function Learn() {
    //structure of useState, how useState works
    const [name, setName] = React.useState('');
    const [list, setList] = React.useState([])
    // const [obj, setObj] = React.useState({})
    // const [obj, setObj] = React.useState({
    //     hek: ['asdf','asdf'],
    //     asdf: {
    //         adsf: 'asdf',
    //         yteiru: ['asdf','adsf'],
    //         ajdsf: 9,
    //     }
    // })

    const handleAdd = () => {
        setList((prev) => [...prev, name])
        setName('')
    }

    return (
        <>
          <div>
              <input value={name} type="text" onChange={(e) => setName(e.target.value)}/>
              <button onClick={handleAdd}>ADD</button>
              <button onClick={() => setList([])}>RESET</button>
          </div>
            <ul>
                {list.map((ele,index) => (
                    <li key={index}>{ele}</li>
                ))}
            </ul>
        </>
    )
}