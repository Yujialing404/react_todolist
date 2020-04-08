import { useState , useCallback , useEffect} from 'react';
import React,{ Fragment } from 'react';
function TodoList() {
    const [inputValue,inputChange] = useState('')
    const [data, listchange] = useState([])

    function onSubmit(){
        listchange([...data,inputValue])
    }
    function remove(index){
        data.splice(index,1)
        listchange([...data])
    }
    return (
      <Fragment>
            <input onChange={e => inputChange(e.target.value)} />
            <button onClick={() => {onSubmit()}}>Submit</button>
            <ul>
                {data.map((value,index) => {
                    return (
                        <div key={index}>
                            <button onClick={() => {remove(index)} }>Remove</button>
                            <li>{value}</li>
                        </div>
                    )
                })}
            </ul>
      </Fragment>
    )
  }
export default TodoList;
