import Intro from "./components/Intro";
import Apps from "./components/Apps";
import SocialLinks from "./components/SocialLinks";
import ContactLinks from "./components/ContactLinks";
import "./index.css";

function App() {
    return (
        <div className="container">
            <Intro />
            <Apps />
            <SocialLinks />
            <ContactLinks />
        </div>
    );
}

export default App;