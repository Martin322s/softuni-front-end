import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Search from "./components/Search/Search";
import UserList from "./components/User-List/UserList";
import Pagination from "./components/Pagination/Pagination";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
    return (
        <>
            <Header />
            <UserContextProvider>
                <main className="main">
                    <Search />
                    <UserList />
                    <Pagination />
                </main>
            </UserContextProvider>
            <Footer />
        </>
    );
}

export default App;
