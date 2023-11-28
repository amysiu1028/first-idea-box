import './Ideas.css';
import Card from '../Card/Card';

function Ideas({ideas, deleteIdea}) {
    console.log("ideas:",ideas)
    const ideaCards = ideas.map((element) => {
        return(
            <Card 
            title={element.title} 
            description={element.description} 
            id={element.id} 
            key={element.id} 
            deleteIdea={deleteIdea}
            /> 
        )
    })
    return(
        <div className="ideas-container">
            {ideaCards}
        </div>
    )
}

export default Ideas;