
// const heading = React.createElement( 
//     "hi",
// {id:"heading",xyz:"abc"},
// "Hello World from React"
//  );

// console.log(heading);//returns an object
//*ReactElement(object)=>HTML(Browser Understands)

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I'm an h1 tag"),
    React.createElement("h2",{},"I'm an h2 tag")
]),
    React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I'm an h1 tag"),
    React.createElement("h2",{},"I'm an h2 tag")
]),
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);