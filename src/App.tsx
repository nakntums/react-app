//import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Home from "./landing-page/Home";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item)
  // }

  const [alertVisibile, setAlertVisibility] = useState(false); //false means alert is initially hidden

  // the below was inside of div before i moved it for the sake of the guide video
  //      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
  // <Alert>
  //   hello <span>world</span>
  // </Alert>

  //   {alertVisibile && (
  //   <Alert onClose={() => setAlertVisibility(false)}><a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ">lol</a></Alert>
  //   )}
  //   <Button color="danger" onClick={() => setAlertVisibility(true)}>CLICK ME</Button>

  return (
    <div>
      
      <Home/>
    </div>
  );
}

export default App;
