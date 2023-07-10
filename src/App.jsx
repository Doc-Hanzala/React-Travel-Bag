import { createContext, useContext, useState } from "react";
import AddItems from "./Components/AddItems";
import Header from "./Components/Header";
import Items from "./Components/Items";
import Footer from "./Components/Footer";
import { ToastContainer, toast } from "react-toastify";

const appContext = createContext();

export const useAppContext = () => useContext(appContext);

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleDeleteItems = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleDeleteAll = () => {
    setItems([]);
    toast.warning("The List is Cleared");
  };

  return (
    <appContext.Provider value={{ handleDeleteItems }}>
      <div>
        <ToastContainer position="top-center" />
        <Header />
        <AddItems onAddItems={handleAddItems} />
        <Items items={items} onDeleteAll={handleDeleteAll} />
        <Footer items={items} />
      </div>
    </appContext.Provider>
  );
}

export default App;
