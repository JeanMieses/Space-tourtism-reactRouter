import Navigation from '../components/Navigation/Navigation';
import classes from './Destination.module.css'

const Destination = () => {
    return (<div  className={`${classes.destination} main-container`}>
        <Navigation/>
    
    <main>
        <h1>Destination</h1>
    </main>
    </div>)
}


export default Destination;