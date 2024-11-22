/* eslint-disable react/jsx-no-undef */

// Import components
import React, { Component } from "react";
import ReadOnlyPost from "./ReadOnlyPost";
import EditablePost from "./EditablePost";

export default class PostContainer extends Component {
    constructor() {
        super();

        // Initialise the variables
        this.state = {
            isEditing: false,
            author: "",
            dateCreated: Date.now(),
            location: "",
            content: "",
            lastUpdate: Date.now()
        }
    }

    toggleEditMode = () => {
        this.setState(
            {
            isEditing: !this.state.isEditing
            }
        )
    }

    // Render to return JSX component
    render() {
        return (
            <>  
                <button onClick={this.toggleEditMode}>Toggle Edit Mode</button>
                {
                    this.state.isEditing ?
                        <EditablePost
                            // Pass all them using props, one at a time
                            author={this.state.author}
                            dateCreated={this.state.dateCreated}
                            location={this.state.location}
                            content={this.state.content}
                            lastUpdated={this.state.lastUpdated}

                            // Could pass the entire state in one go
                            parentState={this.state}
                        /> :
                        <ReadOnlyPost
                        // Pass all them using props, one at a time
                            author={this.state.author}
                            dateCreated={this.state.dateCreated}
                            location={this.state.location}
                            content={this.state.content}
                            lastUpdated={this.state.lastUpdated}

                            // Could pass the entire state in one go
                            parentState={this.state}
                        />
                }
            </>
        )
    }
}