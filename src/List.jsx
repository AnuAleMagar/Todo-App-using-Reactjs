import React ,{useState} from "react";

function List(props)
{
  const[click,setClicked]=useState(false);
  function checkBox()
  {
    {click ? setClicked(false):setClicked(true)};
  }
    return(<div className="list-item"><input className="checkbox" onClick={checkBox} type="checkbox" id="checkbox1" name="checkbox1"></input><li className="item" style={{textDecoration: click ? "line-through":"none"}} >
{props.value}
    </li>
    <div className="buttons">  <button className="update-btn">Update</button>
    <button onClick={()=>{props.deleteData(props.id)}} className="delete-btn">Delete</button></div></div>
  )
}
export default List;