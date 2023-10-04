import { BookList } from "./components/BookList";
import books from './books.json';
import { Timer } from "./components/Timer";
import { Counter } from "./components/Counter";

function App() {
    return (
        <div className="App">
            <BookList books={books} />
            <Timer start={0} />
            <Counter />
        </div>
    )
}

export default App;