import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Tina Johnson" age={21} bio="I love traveling and exploring new cities." />
      <UserProfile name="John Doe" age={28} bio="An adventurer who enjoys food tours and hidden gems." />
      <Footer />
    </div>
  );
}

export default App;

