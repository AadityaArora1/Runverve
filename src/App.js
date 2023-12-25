import logo from './logo.svg';
import './App.css';
import LoginPage from './login/LoginPage';
import { useState } from "react";
import TreeAdoptionForm from './tree/TreeAdoptionForm';

function App() {
  const [loginSelected, setLoginSelected] = useState();
  const [formselected, setformselected] = useState();
  return ( <> 
    {loginSelected && <LoginPage/>}
    {formselected && <TreeAdoptionForm/>}
    {!loginSelected && !formselected &&
    <div>
    <header>
    <button onClick={()=>setLoginSelected(true)} className="cta-button">Login</button>

      <h1>Save the Tree Initiative</h1>
      <p>Join us in our mission to protect and nurture our environment by adopting and caring for trees.</p>
      < button  onClick={()=>setformselected(true)} className="cta-button">Adopt a Tree</button>
    </header>
    
    <section>
      <h2>Why Adopt a Tree?</h2>
      <p>
        Trees play a crucial role in maintaining ecological balance. By adopting a tree, you contribute to
        a sustainable future and become a guardian of nature.
      </p>
    </section>
    
    <section>
      <h2>How It Works</h2>
      <p>
        Our Adopt a Tree initiative goes beyond traditional tree planting. When you adopt a tree, you form a
        long-term partnership with a tree in our community. You receive a direct percentage share in the
        produce delivered to your home.
      </p>
    </section>
    
    <section>
      <h2>Get Involved</h2>
      <p>
        Ready to make a difference? Click the button below to adopt a tree and become a part of the
        movement to save the environment.
      </p>
    </section>
  </div>
    }
    </>);
}

export default App;
