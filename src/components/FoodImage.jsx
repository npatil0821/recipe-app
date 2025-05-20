import { useEffect } from "react";
import styles from './css/foodimage.module.css';

export default function FoodImage({image_url, row_position})
{
    const position = {
        top: row_position.bottom,
        left: row_position.left
    };

    useEffect(() => {}, [image_url]);

    
    return <img className={styles.img_container}src={image_url} style={position}></img>
}