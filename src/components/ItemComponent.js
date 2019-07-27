import React, {Component, Fragment} from 'react';

class ItemComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isValidItem: true,
            comments: {}
        };
    }
    render() {
        return (
            <Fragment>
                <p>hello</p>
                <p>item</p>
            </Fragment>

        )
    }
}

export default ItemComponent;
