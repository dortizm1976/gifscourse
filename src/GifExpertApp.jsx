import { useState } from "react"
import { AddCategory, GifGrid} from "./components"
//import AddCategory from "./components/AddCategory"



const GifExpertApp = () => {
    const [categories, setcategories] = useState([])
    //Functions 
    const onAddCategory = (newCategory)=>{
        const categoryfound = categories.filter((category)=> category.toLowerCase()===newCategory.toLowerCase())
        if( categoryfound.length > 0) return;
        setcategories([newCategory, ...categories])
    }


  return (
    <>
      
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory onAddCategory={ onAddCategory }/>
      {/* listado de gifs */}
      
        { categories.map( (category) => 
            (<GifGrid key={ category } category= {category}/>)
        ) 
        }
        

    </>
  )
}

export default GifExpertApp
