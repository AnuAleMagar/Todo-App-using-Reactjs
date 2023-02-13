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
  const[toggleSubmit,settoggleSubmit]=useState(true);
  const[editItem,seteeditItem]=useState(null);
  function handleChnage(event){
    setData(event.target.value);
    console.log(data);
  }
  function handleClick()
  { 
   { if (data ==""){
    alert("todo can't be empty")
   }
   else if(data && !toggleSubmit){
   setItem(
    item.map((elem)=>
    {
      if(elem.id==editItem){
        return{...elem,name:data}
      }
      return elem;
    }))
    settoggleSubmit(true);
    setData('');
    seteeditItem(null);
    }
   else{
    setItem((oldItem)=>{
      const newit={id:new Date().getTime().toString(),name:data}
      return[...oldItem,newit];
    })}
   }
    setData("");
  }
  function handleDelete(id)
  {
    console.log("deleted",id);
    const olditems=[...item];
    console.log(olditems.name);
    const ittem=olditems.filter((element)=>{
      return id !== element.id
    })
  setItem(ittem);
  console.log("newitems",ittem);
  }

 useEffect(()=>{
  localStorage.setItem('list',JSON.stringify(item))
 },[item]);
// 
  

 //edit list
function handleUpdate(idd){
let newItem=item.find((elem)=>{
return elem.id===idd
});
settoggleSubmit(false);
console.log(newItem);
setData(newItem.name);
seteeditItem(idd);
}
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
        {toggleSubmit ? <button className='btn' onClick={handleClick}>Add</button>:
        <button className='btn' onClick={handleClick}>Update</button>}
      </div>
      <div className='bodybox'>
        <ul className="container">
        {item.map((itemsvalue)=>{
          return(<List key={itemsvalue.id} updateData={handleUpdate} deleteData={handleDelete} value={itemsvalue.name} id={itemsvalue.id} />)
        })}
        </ul>
      </div>
     </div>
    </div>
  );
}

export default App;
