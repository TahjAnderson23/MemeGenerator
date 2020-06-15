import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewMeme extends Component{
    constructor(props){
        super(props);
        this.state ={
            caption: "", 
            image: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleSave(evt){
        evt.preventDefault();
        this.props.createMeme({...this.state , id:uuidv4()} );
        this.setState({caption: ""});

    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSave}>
                <div>
                    <label htmlFor='caption'>Caption</label>
                    <input 
                        type="text" 
                        placeholder="New Meme" 
                        id='caption'
                        name='caption'
                        value={this.state.caption}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='image'>Change Image</label>
                    <input 
                        type="text"
                        placeholder="New Image"
                        id='image'
                        name='image'
                        value={this.state.image}
                        onChange={this.handleChange}
                    />
                </div>
                <button>Save</button>

            </form>
            </div>
        )
    }
}

export default NewMeme;