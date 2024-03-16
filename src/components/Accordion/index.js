import { useState } from "react"
import data from "../data"
import "./index.css"
const Accodion =()=>{
 const [select, setSelect]=useState(null)

   function handlarSingleSelect(getCurrentId){
      console.log(getCurrentId)
      setSelect(getCurrentId ===select?null :getCurrentId)
   }
    return(
        <div className="wraper">
        <h1 style={{alignItems:"center"}}>Accodions</h1>
        <div >
            {
               data && data.length>0 ?
                (data.map((dataItem,id)=><div key={id}>

                  <div className="item" >
                  <div className="title">
                    <h3>{dataItem.qestion}</h3>
                    <span onClick={()=>handlarSingleSelect(dataItem.id)}>{select===dataItem.id? <h1>_</h1>:<h3>+</h3>}  </span>
                    </div>
                    {select===dataItem.id? <p>{dataItem.ans}</p>:null}
                  </div>
                </div>))
               : <div>
                <h1>No Data Found</h1>
               </div> 
            }
        </div>
        </div>
    )
}
export default Accodion