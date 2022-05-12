import './App.css';
import { Navbar } from './MyComponents/Navbar';
import { Home } from "./MyComponents/Home";
import { About } from "./MyComponents/About";
import { Skills } from "./MyComponents/Skills";
import { Contact} from "./MyComponents/Contact";

function App() {
  console.log("Its My Portfolio");
  return (
    <main>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
    </main>
  );
}

export default App;
