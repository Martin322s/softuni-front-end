const rootElement = document.getElementById('root');
// console.dir(rootElement);

const root = ReactDOM.createRoot(rootElement);

// const heading = React.createElement('h1', {}, 'Hello from ReactJS!');
// const secondHeading = React.createElement('h2', null, 'Some slogan here');
// const headerElement = React.createElement('header', null, heading, secondHeading);
// console.log(JSON.parse(JSON.stringify(headerElement)));


const header = (
    <div>
        <header>
            <h1 className="heading">Hello from ReactJS!</h1>
            <h2>Some slogan here</h2>
            <p>Lorem, ipsum dolor.</p>
        </header>

        <button>Click</button>
    </div>
);

root.render(header);