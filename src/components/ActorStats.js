import {useState} from 'react'
import styles from '../stylesheets/ActorCard.module.scss'



const ActorStats = props => {
  const [currentTab, setCurrentTab] = useState('Movies')
  console.log(currentTab)
  const switchTabs = (e)  => {
    setCurrentTab(e.target.textContent)
  }

  //const {movies, tvShows, awards} = props
  
  const isMovie = currentTab === 'Movies'
  const isTV = currentTab === 'T.V Shows'
  const isAwards  = currentTab === 'Awards' 

  return (
    <>
    <ul className={styles.stats_tab}>
      <li onClick={switchTabs} className={isMovie && styles.active}>Movies</li>
      <li onClick={switchTabs} className={isTV && styles.active}>T.V Shows</li>
      <li onClick={switchTabs} className={isAwards && styles.active}>Awards</li>
    </ul>

    {isMovie &&
        <section className={styles.stats_header}>
          <h1>Its movie time</h1>
        </section>
    }


    {isTV &&
        <section className={styles.stats_header}>
          <h1>Its Tv time</h1>
        </section>
    }

    {isAwards &&
        <section className={styles.stats_header}>
          <h1>Its awards time</h1>
        </section>
    }
    </>
  )
}

export default ActorStats
