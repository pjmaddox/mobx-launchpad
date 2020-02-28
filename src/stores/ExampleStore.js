import { observable, action, computed, flow } from "mobx";
import ExampleService from "../services/ExampleService";

class ExampleStore {
    @observable SomeString = "Placeholder Value for SomeString";
    @observable SomeArrayOfObjects = [];

    @computed get firstCharacterOfSomeString() {
        if (this.SomeString.length >= 1)
            return this.SomeString[0];
        else
            return null;
    }

    @computed secondCharacterOfSomeString() {
        if (this.SomeString.length >= 2)
            return this.SomeString[1];
        else
            return null;
    }

    @action AddObjectToArray(objectToAdd) {
        this.SomeArrayOfObjects.push(objectToAdd);
    }

    @action ModifySomeString(newValue) {
        this.SomeString = newValue;
    }

    @action.bound getDataFromExampleService = flow(function*() {
        try {
            let result = yield ExampleService.getData();
            this.SomeArrayOfObjects = result;
        }
        catch(exception) {
            //Error Handling
        }


    });
}

let ExampleStoreInstance = new ExampleStore();

export default ExampleStoreInstance;