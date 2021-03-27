import { Header } from "./components/header";
import { footer } from "./components/footer";

(()=> {
    const root = document.getElementById('root');
    const h = new Header();
    
    // gör inte så här, använd create element istället
    root.innerHTML = h.injectHeaderToDOM(); 
    root.innerHTML += '<h1>Helluu world!</h1>'
    root.innerHTML += footer(); 
})();
