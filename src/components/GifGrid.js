import React from 'react'
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifsItems} from './GifsItems'



export const GifGrid = ({category}) => {
    

   
    const {data:images,loading} = useFetchGifs(category);
     

   

    return (
    <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {loading && <p  className="animate__animated animate__fadeIn">Loading...</p>}
        
        <div className="card-grid">
            
                {
                    images.map(img=>(
                        <GifsItems 
                            key={img.id}
                            {...img}
                            
                        />
                       
                    ))
                }  
        </div>     
    </>
        
  );
};
