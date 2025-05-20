import { useState, createContext } from 'react';
import Search from './components/Search';
import FoodTable from './components/FoodTable';
import Header from './components/Header';

export const FoodContext = createContext();

function App() 
{
  const [food_data, set_food_data] = useState([]);

  return (
    <div className="App">
      <Header />
      <FoodContext.Provider value={{food_data, set_food_data}}>
        <Search food_data={food_data} set_food_data={set_food_data}/>
        <br></br>
        <FoodTable food_data={food_data}/>
      </FoodContext.Provider>
    </div>
  )
}

export default App;
