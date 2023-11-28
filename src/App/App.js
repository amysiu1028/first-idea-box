
import React, { useState, useEffect } from 'react';
import Ideas from '../Ideas/Ideas';
import Form from '../Form/Form';
import './App.css';

function App() {
    //HOW DO we do a GET request here?
        // const [ ideas, setIdeas ] = useState(dummyIdeas)
        const [ ideas, setIdeas ] = useState([])
        //fetch all/get data when loading: usu don't need to define a dependency for that type of fetch, usu define a dependency for PATCH, PUT bc,
        useEffect(() => {
            fetch('http://localhost:3001/api/v1/ideas')
            .then(response => response.json())
            .then(data => {
                console.log("data:",data)
                setIdeas(data)
            })
        },[])

    //POST - not a side effect of anything, so don't use useEffect
    function postIdea(newIdea) {
        // const lastAddedIdea = ideas[ideas.length - 1];
        fetch('http://localhost:3001/api/v1/ideas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            //you want to post the last added idea in the ideas array to the server when array changes
            body: JSON.stringify(newIdea)
        })
        .then(response => response.json())
        .then(newIdea=> {
            console.log("newIdea",newIdea)
            setIdeas(prevIdeas => [...prevIdeas, newIdea]);
        })
    }    

    // function addIdea(newIdea) {
    //     setIdeas([...ideas, newIdea])
    // }

    function deleteIdea(id) {
        //: means that value can change
        console.log("id",id)
        fetch(`http://localhost:3001/api/v1/ideas/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then(response => {
            //QUESTION: why don't I do response.json?
            console.log("response",response)
            return response.json()
        })
        .then(data => {
            console.log("delete data:",data)
            const filteredIdeas = ideas.filter((idea) => idea.id !== id)
            setIdeas(filteredIdeas)
        })
    }

    // function deleteIdea(id) {
    //     //: means that value can change
    //     console.log("id",id)
    //     fetch(`http://localhost:3001/ideas/${id}`, {
    //       method: 'DELETE',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       }
    //     })
    //     .then(response => {
    //         //QUESTION: why don't I do response.json?
    //         console.log("response",response)
    //         return response.json()
    //     })
    //     .then(data => {
    //         console.log("delete data:",data)
    //         const filteredIdeas = ideas.filter((idea) => idea.id !== id)
    //         setIdeas(filteredIdeas)
    //     })
    // }

    return (
        <div className='App'>
            <h1>IdeaBox</h1>
            <Form postIdea={postIdea}/>
            {!ideas.length && <h2>No ideas yet -- add some!</h2>}
            <Ideas ideas={ideas} deleteIdea={deleteIdea}/>
        </div> 
    )
}

export default App;


