import React, { useContext } from 'react';
import { observer } from "mobx-react";
import ExampleContext from "../contexts/ExampleContext";


const ExampleConsumerComponent = observer(() => {
    const store = useContext(ExampleContext);
    return (
        <div>
            {store.SomeString}
        </div>
    );
});