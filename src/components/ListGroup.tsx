//import { MouseEvent } from "react";
import { useState } from "react";

// {items: [], heading: string}
interface Props{
    items: string[];
    heading: string;
    //(item: string) => void
    onSelectItem: (item: string) => void //console will show the selected item
}

function ListGroup({items, heading, onSelectItem}: Props) {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //State Hook will tell react that data will change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);
  

  //const message = items.length === 0 ? <p>No item found</p> : null;

  //event handler to handle clicks
  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
