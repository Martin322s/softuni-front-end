var rootElement = document.getElementById('root');
// console.dir(rootElement);

var root = ReactDOM.createRoot(rootElement);

// const heading = React.createElement('h1', {}, 'Hello from ReactJS!');
// const secondHeading = React.createElement('h2', null, 'Some slogan here');
// const headerElement = React.createElement('header', null, heading, secondHeading);
// console.log(JSON.parse(JSON.stringify(headerElement)));


var header = React.createElement(
    "div",
    null,
    React.createElement(
        "header",
        null,
        React.createElement(
            "h1",
            { className: "heading" },
            "Hello from ReactJS!"
        ),
        React.createElement(
            "h2",
            null,
            "Some slogan here"
        ),
        React.createElement(
            "p",
            null,
            "Lorem, ipsum dolor."
        )
    ),
    React.createElement(
        "button",
        null,
        "Click"
    )
);

root.render(header);