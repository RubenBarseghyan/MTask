import React from "react";
import StoryListItem from "./StoryListItemComponent";
import logo from '../assets/giphy.gif';

const StoryListComponent = (props) => {
    const { stories, page } = props;

    return (
        (stories.length !== 0 && (
            <ul className="story-container">
                <StoryListItem stories={stories} page={page}/>
            </ul>
        )) || <img id="loader" src={logo} alt="logo"/>
    );
};

export default StoryListComponent;
