import FoodItem from './FoodItem';
import styles from './css/foodtable.module.css';
import {useState, useEffect, useContext } from 'react';
import FoodImage from './FoodImage';
import { FoodContext } from '../App';

export default function FoodTable()
{
    const [image_url, set_image_url] = useState('');
    const [show_preview, set_show_preview] = useState(false);
    const [row_position, set_row_position] = useState({});
    const {food_data, set_food_data} = useContext(FoodContext);

    useEffect(() => {
        if (image_url && image_url != '' && row_position && row_position != {})
        {
            set_show_preview(true);
        }
        else
        {
            set_show_preview(false);
        }
    }, [image_url]);

    return (
    <div className={styles.table_container_outer}>
        <div className={styles.table_container_inner}>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr className={styles.header_row}>
                        <th>Name</th>
                        <th>Servings</th>
                        <th>Calories</th>
                        <th>Fat (g)</th>
                        <th>Carbs (g)</th>
                        <th>Fiber (g)</th>
                        <th>Protein (g)</th>
                    </tr>
                </thead>
                <tbody>
                    {food_data.map((food_info, index) => <FoodItem key={food_info.id} food_info={food_info} set_image_url={set_image_url} set_row_position={set_row_position}/>)}
                </tbody>
            </table>
            {show_preview && <FoodImage image_url={image_url} row_position={row_position}/>}
        </div>
    </div>
    );
}