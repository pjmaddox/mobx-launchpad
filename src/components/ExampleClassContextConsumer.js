import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ExampleContext from "../contexts/ExampleContext";

@observer class ExampleClassContextConsumer extends Component{
    static contextType = ExampleContext;

    render() {
        return (
            <div>
                Example Class Component That Consumes A Context
            </div>
        );
    }
}

export default ExampleClassContextConsumer;