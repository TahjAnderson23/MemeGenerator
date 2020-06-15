import React, {Component} from 'react'
import './Meme.css'; 
class Meme extends Component{
    constructor(props){
        super(props);
        this.state ={
            isEditing: false,
            caption: this.props.caption,
            image:this.props.image
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    handleRemove(){
        this.props.removeMeme(this.props.id);
    }

    toggleForm(){
        this.setState({isEditing: !this.state.isEditing});
    }

    handleUpdate(evt){
        evt.preventDefault();
        //algotrithm to call on to update
        this.props.updateMeme(this.props.id, this.state.caption, this.state.image)
        this.setState({isEditing: false});
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    render(){
        let result;
        if(this.state.isEditing){
            result =(
            <div className = "meme">
                <form onSubmit ={this.handleUpdate}>
                    <div>
                        <input 
                        type ="text" 
                        value={this.state.caption}
                        name = "caption"
                        onChange={this.handleChange}
                        />
                    
                </div>

                <div>
                    <input 
                        type="text"
                        value={this.state.image}
                        name="image"
                        onChange={this.handleChange}
                    />
                </div>

                <button>Save</button>

                </form>
            </div>
            )
        }
        else{
            result =(
            <div>
                <li>
                    <p>{this.props.caption}</p>
                    <img className = "img-meme" src={this.props.image} alt={this.props.caption} />
                    <button className ="meme-buttons" onClick={this.toggleForm}>Edit Meme</button>
                    <button class Name="meme-buttons" onClick={this.handleRemove}>Delete Meme</button>
                </li>
            </div>
            
            );
        }
        return result;
    }
}

export default Meme;