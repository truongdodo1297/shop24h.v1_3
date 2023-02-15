import Header from "./components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer";
import Body from "./components/body";

function App() {
  return (
    <div style={{display: "block"}}>
      <Header />
      <Body/>
      <Footer />
    </div>
  );
}

export default App;
