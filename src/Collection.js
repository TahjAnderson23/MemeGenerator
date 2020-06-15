import React, {Component} from 'react';
import NewMeme from './NewMeme.js';
import Meme from './Meme.js';
import DrakeMeme from './DrakeMeme.jpg';


class Collection extends Component{
    constructor(props){
        super(props);
        this.state = {
            memes: []
            
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
    }
    
    create(newMeme){
        this.setState({
            memes:[...this.state.memes, newMeme]
        })
    }

    remove(id){
        this.setState({
            memes: this.state.memes.filter(m => m.id !== id)
        });
    }

    update(id, updatedCaption, updatedImage){
        const updatedMemes = this.state.memes.map(meme => {
            if(meme.id === id){
                return{...meme, caption: updatedCaption, image: updatedImage};
            }
            return meme;
        });
        this.setState({memes: updatedMemes});
    }

    render(){
        const memes = this.state.memes.map(meme => {
            return <Meme 
            key={meme.id}
            id={meme.id}
            caption={meme.caption} 
            image={meme.image} 
            removeMeme ={this.remove}
            updateMeme ={this.update}
            />;
        });
        return(
            <div>
                <NewMeme createMeme={this.create} />
                <ul>
                    {memes}
                </ul>
                <h1>Collection</h1>
            </div>
        )
    }
}

export default Collection;