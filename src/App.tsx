import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  console.log("Oi");

  return (
    <>
      <Heading attr="passa um atributo">Hey, guys</Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere
        cumque similique inventore consectetur eum vero temporibus, magnam,
        reprehenderit debitis pariatur excepturi doloribus! Quos possimus ab
        consequuntur eveniet minima tempora!
      </p>
    </>
  );
}
