import React, { useState ,useEffect} from 'react';
import './App.css';
import List from './List';

const getitemsfromlocal=()=>{
  let list=localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else{
    return [];
  }
}
function App() {
  const[data,setData]=useState("");
  const[item,setItem]=useState(getitemsfromlocal());

  function handleChnage(event){
    setData(event.target.value);
    console.log(data);
  }
  function handleClick()
  { 
   { if (data !==""){
    setItem((oldItem)=>{
      return[...oldItem,data];
    })}
   }
    setData("");
  }
  function handleDelete(id)
  {
    console.log("deleted",id);
    const olditems=[...item];
    console.log(olditems);
    const ittem=olditems.filter((element,i)=>{
      return i!== id
    })
  setItem(ittem);
  console.log("newitems",ittem);
  }

 useEffect(()=>{
  localStorage.setItem('list',JSON.stringify(item))
 },[item]);
  return (
    <div className="App">
     <div className='Main'>
      <div className='Title'>
        <h1 className='titlehead'>My Todo-List ❤️</h1>
      </div>
      <div className='firstbox'>
        <div>
          <input onChange={handleChnage} className='box1' type="text" placeholder='Write Your Todo Here!' value={data}></input>
        </div>
        <button className='btn' onClick={handleClick}>Add</button>
      </div>
      <div className='bodybox'>
        <ul className="container">
        {item.map((itemsvalue,i)=>{
          return(<List key={i} deleteData={handleDelete} value={itemsvalue} id={i} />)
        })}
        </ul>
      </div>
     </div>
    </div>
  );
}

export default App;
