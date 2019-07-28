import React, {Component} from 'react';
import loaderImage from '../assets/Loading';

export default function mainComponent(importComponent) {
    class MainComponent extends Component {
        constructor(props) {
            super(props);

            this.state = {
                module: null
            };
        }

        async componentDidMount() {
            const { default: component } = await importComponent();
            this.setState({module: component});
        }

        render() {
            const { module: Component } = this.state;
            return Component ? <Component {...this.props} /> : <img id="loader" src={loaderImage}/>;
        }
    }

    return MainComponent;
}

