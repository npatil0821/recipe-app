import { useRef, useContext } from "react";
import styles from './css/search.module.css';
import { FoodContext } from "../App";

const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = 'API_KEY_HERE'; //Use API Key from Spoonacular

export default function Search()
{
    const input_element = useRef();
    const {food_data, set_food_data} = useContext(FoodContext);

    //useEffect(() => {fetch_food()},[query]);

    return <div className={styles.search_form}>
        <input className={styles.text_input} type='text' placeholder="Enter Dish..." ref={input_element}/>
        <div className={styles.search_icon} onClick={(e) => fetch_food(input_element?.current?.value)}></div>
    </div>;

    async function fetch_food(query)
    {

        let response = await fetch(`${URL}?apiKey=${API_KEY}&query=${query}&addRecipeNutrition=true`);
        let data = await response.json();

        set_food_data(data.results);

        console.log(data.results); //-NP
    }
}