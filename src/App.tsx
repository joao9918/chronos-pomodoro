import "./styles/theme.css";
import "./styles/global.css";

import { Home } from "./pages/Home";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { Toast } from "./components/Toast";

export function App() {
  return (
    <TaskContextProvider>
      <Home />
      <Toast />
    </TaskContextProvider>
  );
}
