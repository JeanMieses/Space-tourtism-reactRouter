import { useParams, NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import classes from './Destination.module.css';
import data from './../assets/data.json';

const Destination = () => {
    const { place } = useParams();
    const destination = data.destinations.find(p => p.name.toLowerCase() === place.toString());
    const img = `/destimationImg/image-${destination.name.toLowerCase()}.png`;

    return (<div className={`${classes.destination} main-container`}>
        <Navigation />

        <main>
            <div className={classes.place}>
                <h2> <span>01</span>  pick your destination</h2>
                <img src={img} alt='destination' />
            </div>

            <div className={classes.description}>
                <ul>
                    <li><NavLink className={(navData) => navData.isActive? classes.active : ''} to='/destination/moon'>moon</NavLink></li>
                    <li><NavLink className={(navData) => navData.isActive? classes.active : ''} to='/destination/mars'>mars</NavLink></li>
                    <li><NavLink className={(navData) => navData.isActive? classes.active : ''} to='/destination/europa'>europa</NavLink></li>
                    <li><NavLink className={(navData) => navData.isActive? classes.active : ''} to='/destination/titan'>titan</NavLink></li>
                </ul>

                <h1> {destination.name} </h1>
                <p> {destination.description} </p>

                <div className={classes.travel}>
                    <div>
                    <p>avg. distance</p>
                    <h3> {destination.distance} </h3>
                    </div>

                    <div>
                    <p>est. travel time</p>
                    <h3> {destination.travel} </h3>
                    </div>
                </div>

            </div>

        </main>
    </div>)
}

export default Destination;