import React from 'react';
import ExampleStore from "../stores/ExampleStore";
import { ExampleContextProvider } from "../contexts/ExampleContext";
import ExampleConsumerComponent from "./ExampleConsumerComponent";

const ExampleHighLevelComponent = () => {
    return (
        <div>
            <ExampleContextProvider value={ExampleStore}>
                <ExampleConsumerComponent />
            </ExampleContextProvider>
        </div>
    );
};

export default ExampleHighLevelComponent;