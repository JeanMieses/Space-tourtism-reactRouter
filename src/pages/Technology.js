import Navigation from '../components/Navigation/Navigation';
import classes from './Technology.module.css'

const Technology = () => {
    return (<div className={`${classes.technology} main-container`}>
        <Navigation />
        <main>
            <h1>Destination</h1>
        </main>
    </div>)
}


export default Technology;