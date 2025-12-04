import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";
import { TimerIcon } from "lucide-react";

export function App() {
  return (
    <>
      <Heading>
        Ola, pessoal!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere
        cumque similique inventore consectetur eum vero temporibus, magnam,
        reprehenderit debitis pariatur excepturi doloribus! Quos possimus ab
        consequuntur eveniet minima tempora!
      </p>
    </>
  );
}
