import React, { useState } from 'react'
import Item from './Item';

const App = () => {

  const [inp,setInp] = useState("");
  const [items,setItems]= useState([]);

  const itemEvent=(event)=>{
    setInp(event.target.value);
  };

  const addItems=()=>{
    setItems((allItems)=>{
      return [...allItems, inp];
    });
    setInp("");
  };
  
  const deleteIt=(id)=>{
    setItems((allItems)=>{
      return allItems.filter((arrElem, index)=>{
        return index!==id;
      });
    })
  };

  return (
    <><div className='main_div'>
      <div className='center_div'>
        <br/>
        <h1>TODO LIST</h1>
        <br/>
        <input type="text" placeholder='Add items'  
        value={inp}
        onChange={itemEvent}/>
        <button className='add' onClick={addItems}>+</button>
        <ol>
          {/* <li>{inp}</li> */}
          {items.map((val, index)=>{
          return <Item key={index} id={index} items={val} onSelect={deleteIt}/>
          })}
        </ol>
      </div>
    </div>
    </>
  )
}

export default App