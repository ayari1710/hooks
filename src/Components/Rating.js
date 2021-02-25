import React from 'react';
import { Rate,  } from 'antd';


const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Rating  =({ filterRate, rating , setRating,movieRating})=> {
  
 const  handleChange = value => {
    setRating(value)
    
  };

//   render() {
//     const { value } = this.state;
    return (
      <span>
        {filterRate ?
        <Rate tooltips={desc} onChange={handleChange} value={rating } />
      :
      <Rate value={movieRating} disabled className="movieRating" />

      }

      </span>
    );
  }




export default Rating