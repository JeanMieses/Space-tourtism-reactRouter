import { NavLink, useSearchParams } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import classes from './Destination.module.css';

const Destination = (props) => {
    let [searchParams] = useSearchParams();
    const place = searchParams.get("location")
    const destination = props.destinations.find(p => p.name.toLowerCase() === place.toString());
    const img = `/destimationImg/image-${destination.name.toLowerCase()}.png`;

    return (<div className={`${classes.destination} main-container`}>
        <Navigation />
        <main>
            <div className={classes.place}>
                <h2> <span>01</span>  pick your destination</h2>
                <img src={img} alt={destination.name} />
            </div>

            <div className={classes.description}>
                <ul>
                    <li><NavLink className={() => place === 'moon' ? classes.active : ''} to='/destination?location=moon'>moon</NavLink></li>
                    <li><NavLink className={() => place === 'mars' ? classes.active : ''} to='/destination?location=mars'>mars</NavLink></li>
                    <li><NavLink className={() => place === 'europa' ? classes.active : ''} to='/destination?location=europa'>europa</NavLink></li>
                    <li><NavLink className={() => place === 'titan' ? classes.active : ''} to='/destination?location=titan'>titan</NavLink></li>
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