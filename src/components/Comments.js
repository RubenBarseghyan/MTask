import React, {Fragment} from "react";
import loaderImage from "../assets/Loading";


function ListComments(props) {
    let { node, children } = props;
    let childnodes = null;

    if (children) {
        childnodes = children.map((childnode) => {
            return (
                <div className="com-comments"  key={childnode.id}>
                    <ListComments
                        key={childnode.id}
                        node={childnode}
                        children={childnode.comments}
                    />
                </div>

            );
        });
    }

    return (
            <li key={node.id} className="main-comment">
                <div className="story_details">{node.time_ago}</div>
                <div
                    dangerouslySetInnerHTML={{ __html: node.content }}
                />
                {childnodes && <ul style={{ paddingLeft: "55px" }}>{childnodes}</ul>}
            </li>
    );
}

const Comments = (props) => {
    const { comments } = props;
    const commentsArray = comments.comments;

    let nodes =
        commentsArray &&
        commentsArray.map((item) => {
            return (
                <ListComments className="listComments" key={item.id} node={item} children={item.comments} />
            );
        });

    return (
        (comments && (
            <Fragment key={comments.id}>
                    <div style={{ margin: "15px 15px" }}>
                        <div className="main-comment-info">
                            <a href={comments.url} target="_blank">
                                <h2>{`${comments.title} (domain: ${comments.domain})`}</h2></a>
                            <h4>
                                {`${comments.points} points was made by: ${comments.user}`}
                            </h4>
                            <h4>
                                {`Posted: ${comments.time_ago} `}
                            </h4>
                        </div>
                        <ul style={{ paddingLeft: "35px",  }}>{nodes}</ul>
                    </div>
            </Fragment>
        )) ||<img id="loader" src={loaderImage}/>
    );
};
export default Comments;
