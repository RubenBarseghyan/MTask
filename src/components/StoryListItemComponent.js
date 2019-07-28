import React, {Fragment} from "react";
import { Link } from "react-router-dom";

const StoryListItem = (props) => {
    const { stories, page } = props;

    return stories.map((story) => {
        let currentPage = parseInt(page, 10);
        let storyNumber =
            currentPage !== 1 ? (currentPage * 30) - 30 + story.index + 1 : story.index + 1;

        return (
            <Fragment key={story.id}>
                <Link style={{ textDecoration: 'none'}}
                      to={`/item/${story.id}`}>
                    <li className="story" key={story.id} style={{ background: '#bfefe4', paddingLeft: '15px'}}>
                            <h4>
                                {`${storyNumber}. ${story.title}`}
                            </h4>
                            <p>
                                {`${story.points} points was made by: ${story.user}`}
                            </p>
                            <p>
                                {`Posted: ${story.time_ago} `}
                            </p>
                            <p>
                                {`Total count of comments: ${story.comments_count}`} comments
                            </p>
                    </li>
                </Link>
            </Fragment>
        );
    });
};

export default StoryListItem;
