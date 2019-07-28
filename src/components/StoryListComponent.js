import React from "react";
import StoryListItem from "./StoryListItemComponent";
import loaderImage from "../assets/Loading";

const StoryListComponent = (props) => {
    const { stories, page } = props;

    return (
        (stories.length !== 0 && (
            <ul className="story-container">
                <StoryListItem stories={stories} page={page}/>
            </ul>
        )) || <img id="loader" src={loaderImage}/>
    );
};

export default StoryListComponent;
