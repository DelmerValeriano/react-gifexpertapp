
//rafc es para poner de un solo
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export  const GifExpertApp = ()=>{

    // const categories =['One punch','samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One punch']);
   
    // const handleAdd =()=>{

    //     // setCategories([...categories,'Demon Slayer']);
    //     setCategories(cats=>[...cats,'Demon Slayer']);

    // }
   
   
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

         
            <ol>
               {
                   categories.map(category=>(
                     <GifGrid 
                     key={category}
                     category={category}/>
                   ))
               }
            </ol>
        </>
       

    );
    
};
