import "./App.css";
import "./css/nav.css";
import "./css/first_section.css";
import Nav from "./components/Nav";
import FirstSection from "./components/FirstSection";
export default function App() {
  return (
    <div className="App">
      <Nav />
      <FirstSection />
    </div>
  );
}
