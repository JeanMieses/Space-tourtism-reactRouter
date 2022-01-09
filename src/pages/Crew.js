import Navigation from '../components/Navigation/Navigation';
import classes from './Crew.module.css';

const Crew = () => {
    return (<div className={`${classes.crew} main-container`}>
        <Navigation />
        <main >
            <h1>Destination</h1>
        </main>
    </div>)
}


export default Crew;