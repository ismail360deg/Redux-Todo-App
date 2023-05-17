import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import TaskAddForm from "./components/TaskAddForm/TaskAddForm";
// import Todos from "./components/TaskAddForm/Todos";

function App() {
  return (
    <>
      <Navbar />
      <TaskAddForm />
      {/* <Todos /> */}
      <Footer />
    </>
  );
}

export default App;
