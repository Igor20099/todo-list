import { useState } from 'react'
import styles from './TodoForm.module.css'

export default function TodoForm({onClick}) {
const [value,setValue] = useState('')
  
    return(
        <div>
            <form className={styles.form}>
                <input type='text' className={styles.input} value={value} onChange={(e) => setValue(e.target.value)}/>
                <button type="button" className={styles.btn} onClick={() => {onClick(value); setValue("")}} disabled={value === ''}>Добавить</button>
            </form>
        </div>
    )
}