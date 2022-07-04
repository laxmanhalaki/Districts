
import './App.css';

import { useState,useEffect } from 'react';

 function App() {

const [districts,setDistricts]=useState([])
const [subdistricts,setSubdistricts]=useState([])
const[villages,setVillages]=useState([])
const [districtid,setDistrictid]=useState()



var getstate= async ()=>{
var response=await fetch("https://raw.githubusercontent.com/laxmanhalaki/state-api/main/state-api.json")
const data=await response.json();
setDistricts( await data.districts);


}
useEffect( ()=>{
  
     getstate();

},[])



const handlechange= (e)=>{
  var l=e.target.value;
setDistrictid(districts[l])

  setSubdistricts (districts[l].subDistricts)

}

const talukchange=(e)=>{
  var s=e.target.value;

  setVillages( districtid.subDistricts[s].villages)

}
  
 
  return (
<div>
  <h1>Districts-Taluks-Villages of KARNATAKA.</h1>
<div className='container'>
 <select onChange={(e)=>handlechange(e)}>
  <option>select-district</option>
  {
    districts.map((e,i)=>

      (
        <option value={i} key={i} >{e.district}</option>
      )
    )
  }
 </select>

<select onChange={(e)=>talukchange(e)} > 
<option>select-taluk</option>
{
subdistricts.map((e,i)=>{
  return(
   
        <option value={i} key={i} >{e.subDistrict}</option>
   
  )
})
}
</select>



<select > 
<option>select-village</option>
{
villages.map((e,i)=>{
  return(
   
        <option value={i} key={i}>{e}</option>
   
  )
})
}
</select>

    </div>
</div>
  
  );
}

export default App;
