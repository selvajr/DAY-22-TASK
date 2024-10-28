import "./App.css";
import Card from "./components/card";
function App() {
  return (
    <>
      <span className="container">
        <Card k={"Card1"} price={0} mod={"FREE"} num={4} user={"Single User"} />
        <Card key={"Card2"} price={9} mod={"PLUS"} num={7} user={"5 User"}/>
        <Card key={"Card3"} price={49} mod={"PRO"} num={8} user={"Unlimited User"}/>
      </span>
    </>
  );
}

export default App;