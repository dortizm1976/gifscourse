import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event)=>{
        setInputValue(event.target.value)
    }

    const onSubmit = (event)=>{
        event.preventDefault()
        if (inputValue.trim().length < 1) return;
        onAddCategory(inputValue.trim())
        setInputValue('')
    }
  return (
    <>
        <form onSubmit={ (e)=> onSubmit(e)}>
            <input  
            type="text"
            placeholder="Buscar gifs"
            value = {inputValue}
            onChange={ (e) => onInputChange(e) }
            />
        </form>
        
    </>
  )
}

AddCategory.propTypes = {
    onAddCategory : PropTypes.func
}

