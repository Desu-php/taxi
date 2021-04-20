import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}
export default App;
