import { NavLink, useSearchParams } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import classes from './Technology.module.css'

const Technology = (props) => {

    const [searchParams] = useSearchParams();
    const tech = searchParams.get('technology');
    const technology = props.technology.find(t => t.name.toLowerCase().includes(tech));
    const img = `/technology/${technology.name.toLowerCase().replace(' ', '')}.jpg`;

    console.log(props.technology);

    return (<div className={`${classes.technology} main-container`}>
        <Navigation />
        <main>
            <h2> <span>03</span> space launch 101</h2>

            <div>
                <div className={classes.image}>
                    <img src={img} />
                </div>

                <div className={classes.description}>
                    <ul>
                        <li> <NavLink to='/technology?technology=launch'>1</NavLink> </li>
                        <li> <NavLink to='/technology?technology=spaceport'>2</NavLink> </li>
                        <li> <NavLink to='/technology?technology=capsule'>3</NavLink> </li>
                    </ul>

                    <div>
                    <h3>  the technology... </h3>
                    <h1> {technology.name} </h1>
                    <p> {technology.description} </p>
                    </div>
                </div>
            </div>

        </main>
    </div>)
}


export default Technology;