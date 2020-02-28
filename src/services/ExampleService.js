const ExampleData = [
    { word: "Gosh" }, { word: "Golee" }, { word: "Gee" }, { word: "Wizz" }
];

//Just a simple class that allows us to emulate something like an API call
export class ExampleService {
    static async GetData() {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                resolve(ExampleData);
            },2000);
        });
    }
}