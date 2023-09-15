import React, {useState} from 'react'
import axios from 'axios';
import ValidateResult from './ValidateResult';
import { Ring } from '@uiball/loaders'

export default function Validate(props) {
    const [search, setSearch] = useState("Enter Here");
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)

    const handleSearchChange=(event)=>{
        setSearch(event.target.value);
    }
    const key = "ema_live_hk3YUsFf55EgJ7M0zbpuWUM2FYasj0TUHDyG7CzY"
    const handleButtonClick=()=>{
        console.log("button clicked");
        if(search!==""& search!=="Enter Here"){
            setLoading(true);
            axios.get(`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${search}`)
            .then((response)=>{
                setResult(response.data);
                setLoading(false)
                console.log(response.data)
            })
            .catch((error)=>{
                console.log(error)
            });
        }
        else{
            alert("invalid")
        }
    }

  return (
    <div>
      <div className="container">
      <h3 className='bold my-3'>Enter your email to validate</h3>
      
      <div className="input-group mb-5">
          <input
            type="text"
            className="form-control"
            placeholder={search}
            onChange={handleSearchChange}
          />
          
          <button className="btn btn-dark mx-1" type="button" onClick={handleButtonClick} >
            Search
          </button>
        </div>
    </div>
    <ValidateResult mailData={result}/>
    <div className="container">
    {loading ? <Ring size={45} color="#231F20" /> : null}
    </div>
   

    </div>
  )
}
