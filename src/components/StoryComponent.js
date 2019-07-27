import React, { Component, Fragment} from 'react';
import Pagination from "../pagination/Pagination";

class  StoryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            story: null,
            isValidPage: true,
            stories: [],
            totalPages: 0
        };
    }

    render() {
        return(
            <Fragment>
                <div className="main" style={{margin:'45px'}}>
                    <Pagination/>
                    <p>You  Are</p>
                    <p>Pretty</p>
                </div>
            </Fragment>
        )
    }
}

export default StoryComponent;
