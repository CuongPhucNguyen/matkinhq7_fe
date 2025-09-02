import logo from './logo.svg';
import './App.css';
import Button from "./Components/Button";
import NavBar from "./Components/NavBar";

function App() {
  return (

    <div className="App">

        <header className="App-header">
            <NavBar />
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <h1>Welcome to My App</h1>
            <nav>
                <ul>
                    <Button />
                </ul>
            </nav>
        </header>
        <main>
            <h2>Main Content</h2>
            <p>This is where the main content of the app will go.</p>
        </main>
        <footer>
            <p>&copy; 2023 My App</p>
        </footer>

    </div>




    
  );
}

export default App;
