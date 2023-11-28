import './Form.css'
import { useState } from 'react';
//what are things that change? title input and description input

function Form({postIdea}) {
    //both starts off empty
    //The current state value in this case an empty string and a function to update the state in this case setTitle.
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");

    function submitIdeas(event) {
        event.preventDefault()
        const newIdea = {
            id: Date.now(),
            //In JavaScript, when the property names in an object literal match the variable names, you can use shorthand notation. When value === the key name state lin 8 and 38
            title,
            description,
        }
        // addIdea(newIdea)
        postIdea(newIdea)
        clearInput()
    }

    function clearInput() {
        setTitle('');
        setDescription('')
    }

    return(
        // onChange:
        //when onChange event listener is triggered by the user typing something into the input field, the setTitle fx is called with the new value of the input as an argument. This updates the state of the title variable with the new value, causing a re-render of the component with the updated state.
       <form>
            <label>Title:</label>
            <input 
            type="text" 
            placeholder="Title" 
            name='title' 
            value={title} 
            onChange={event => setTitle(event.target.value)}
            />

            <label>Description:</label>
            <input 
            type="text" 
            placeholder="Description" 
            name="description" 
            value={description} 
            onChange={event => setDescription(event.target.value)}></input>

            <button onClick={event => submitIdeas(event)}>Submit:</button>
       </form>
    )
}

export default Form