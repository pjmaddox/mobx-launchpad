import React from 'react';

//Create a context
const ExampleContext = React.createContext({});

//Export each element individually for ease of consumption in components
export const ExampleContextProvider = ExampleContext.Provider;
export const ExampleContextConsumer = ExampleContext.Consumer;
export default ExampleContext;