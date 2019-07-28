import React, {Component, Fragment} from 'react';
import { validateItem, getStoryItem } from "../actions/Action";
import Comments from './Comments';



class ItemComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isValidItem: true,
            comments: {}
        };
    }
    componentWillMount() {
        const { match } = this.props;
        const { params } = match;
        const { isValidItem } = this.state;

        if (!isValidItem) {
            return;
        }
        this.setState({
            isValidItem: validateItem(params.item)
        });
    }

    componentDidMount() {
        const { match } = this.props;
        const { params } = match;
        const { isValidItem } = this.state;

        if (!isValidItem) {
            return;
        }
        this.getItem(params.item);
    }

    getItem(item) {
        this.setState({
            comments: {}
        });
        getStoryItem(item).then((comments) => {
            this.setState({ comments });
        });
    }

    render() {
        const { isValidItem, comments } = this.state
        return (
            <Fragment key={1}>
                <div className="comments-container">
                    {(isValidItem && (
                        <Comments comments={comments}/>
                    )) || <h1 style={{margin: "15px"}}>Invalid ITem</h1>}
                </div>

            </Fragment>

        )
    }
}

export default ItemComponent;
