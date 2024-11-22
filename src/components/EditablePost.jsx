import React, { Component } from 'react'; 

// because this is a child component this needs the constructor
export default class EditablePost extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="EditablePost">
                {/* Editable author field */}
                <label htmlFor='authorField'>Author: </label>
                <input type='text' name='authorField' id='authorField' value={this.props.author} />

                {/* Editable location field */}
                <label htmlFor='locationField'>location: </label>
                <input type='text' name='locationField' id='locationField' value={this.props.location} />

                {/* Editable content field */}
                <label htmlFor='contentField'>content: </label>
                <input type='text' name='contentField' id='contentField' value={this.props.content} />
            </div>
        )
    }
    
}
