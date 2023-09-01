import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import styles from './Landing.module.css'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <img className={styles.image} src={logo} alt='img not found' />
      <h3 className={styles.title}>Welcome to our Pokémon database!</h3>
      <p className={styles.description}>
        This app is designed to help you get detailed information about all your
        favorite Pokémons, their abilities, stats, types, and more. Start your
        Pokémon adventure today!
      </p>
      <button className={styles.button} onClick={() => navigate('/pokemon')}>
        <span className={styles.buttonText}> Catch&apos;em all</span>
      </button>
    </div>
  )
}