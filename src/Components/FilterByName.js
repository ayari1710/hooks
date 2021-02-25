import React from 'react'
import { Form } from 'react-bootstrap'
const FilterByName = ({inputsearch,setinputsearch}) => {
    return (
        <div>
               <Form.Control type="text" placeholder="Enter movie name ..."
        className="inputFilter" 
        onChange={  (e)  => setinputsearch  (e.target.value)}
        value={inputsearch}
        />
 
        </div>
    )
}

export default FilterByName
