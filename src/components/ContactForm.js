import React, { useState } from 'react'

import {useNavigate} from 'react-router-dom';


export default function ContactForm() {
    let [name, setName] = useState();
    // let [email, setEmail] = useState();
    let navigate = useNavigate();
  return (
    <>
        <form onSubmit={(e) => {
            e.preventDefault();
            navigate(`/welcome/${name}`);
        }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                    onChange={(e) => {
                        setName(e.currentTarget.value)
                    }}
                    value={name}/>
                    
        </div>
        {/* <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                    onChange={(e) => {
                        setEmail(e.currentTarget.value)
                    }}
                    value={email}
                    />
          
        </div> */}

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      
    </>
  )
}
