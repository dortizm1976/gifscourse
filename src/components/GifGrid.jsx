//import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
//import { GetGifs } from '../helpers/GetGifs';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {
    
    //Custom States
    
    const { images, isLoading} = useFetchGifs( category )

    console.log(images, isLoading)

    
  return (
    <>
        <h3 key={ category}>{category}</h3>
        {
            isLoading 
            ? ( <h2>Loading...</h2>)
            : null
        }
        
        <div className='card-grid'>
            {
                images.map(( image ) =>
                    (<GifItem key={image.id} {...image} />)                    
                )
            }
        </div>
    </>
  )
}

GifGrid.propTypes = {
    
    category : PropTypes.string.isRequired
}


