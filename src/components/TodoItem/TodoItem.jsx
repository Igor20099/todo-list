import styles from './TodoItem.module.css'
import removeImage from '../../assets/remove.png'


export default function TodoItem({todo, index, handleRemoveTodo}) {
    return (
        <li className={styles.todo}>{todo} <button onClick={() => handleRemoveTodo(index)} style={{background:'none'}}><img src={removeImage} alt='Удалить' className={styles.img}/></button></li>
    )
}