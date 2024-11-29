import React from 'react';
import {CDN_URL} from "../utils/constants"
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({items}) =>{
    console.log(items);
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item.card.info.name));
    }
    return(
        <div>
            {items.map((item)=>(
               <div className='p-2 m-2 border-gray-200 border-b-2  flex justify-between' key={item.card.info.name}>
                <div className='text-left mt-5 mb-5 w-9/12 '>
                    <div className='py-2'>
                        <h3 className='font-bold' style={{color:"#5d5656"}}>{item.card.info.name}</h3>
                        <span className='font-bold'  style={{color:"#5d5656"}}>₹{" "} {item.card.info.price || item.card.info.defaultPrice} </span>
                    </div>
                    <p>{item.card.info.description}</p>
                    </div>
                    <div className='w-3/12'>
                        
                    <div className='absolute'>

                    <button className='bg-white text-green-600 font-bold border  rounded-md px-5 py-1 w-28  mx-8' onClick={() => handleAddItem(item)}>Add</button>

                    </div>

                    <img src={CDN_URL + item.card.info.imageId}alt="" className=' rounded-lg ' />

                    </div>
               </div>
            ))}
        </div>
    )
}

export default ItemList;
