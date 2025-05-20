import styles from './css/fooditem.module.css';
import { useRef} from 'react';

export default function FoodItem({food_info, set_image_url, set_row_position})
{
    let macros = ['Calories', 'Protein', 'Fat', 'Carbohydrates', 'Fiber'];
    let row_info = {
        name: food_info.title,
        servings: food_info.servings,
        image_url: food_info.image
        //ingredients: []
    };
    let elementRef = useRef(null);

    food_info.nutrition.nutrients.forEach(set_macro_info);
    //food_info.nutrition.ingredients.forEach(set_ingredients); //-NP

    return (
    <tr className={styles.item_row} ref={elementRef} onPointerLeave={() => {set_image_url(''); set_row_position({})}} onPointerEnter={() => {set_image_url(row_info.image_url); set_row_position(elementRef.current.getBoundingClientRect())}}>
        <td className={styles.name}><a href={food_info.sourceUrl}>{row_info.name}</a></td>
        <td>{row_info.servings}</td>
        <td>{row_info.calories}</td>
        <td>{row_info.fat}</td>
        <td>{row_info.carbohydrates}</td>
        <td>{row_info.fiber}</td>
        <td>{row_info.protein}</td>
    </tr>
);

//To be implemented in the future possibly
/*     function set_ingredients(ingredient)
    {
        row_info.ingredients.push(ingredient.name);
    } */

    function set_macro_info(nutrient)
    {
        if (macros.includes(nutrient.name))
        {
            row_info[nutrient.name.toLowerCase()] = nutrient.amount;
        }
    }
}