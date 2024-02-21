import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Todo } from "./components/Todo";

import "./global.css";

function App() {
  return (
    <>
      <Header />
      <Todo />
      <Footer />
    </>
  );
}

export default App;