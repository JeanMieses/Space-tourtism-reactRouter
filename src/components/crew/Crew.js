import { NavLink, useSearchParams } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import classes from './Crew.module.css';

const Crew = (props) => {
    const [searchParams] = useSearchParams();
    const findMember = searchParams.get('member');
    const member = props.crew.find(q => q.name.toLowerCase().includes(findMember));
    const img = `/crew/${member.name.toLowerCase().replace(' ', '')}.png`;

    return (<div className={`${classes.crew} main-container`}>
        <Navigation />
        <main >
            <h2> <span>02</span> meet you crew </h2>
            <div>
                <div className={classes.image}>
                    <img src={img} alt={member.name}/>
                </div>

                <div className={classes.bio}>
                    <ul>
                        <li> <NavLink to='/crew/?member=douglas'></NavLink> </li>
                        <li> <NavLink to='/crew/?member=mark'></NavLink> </li>
                        <li> <NavLink to='/crew/?member=victor'></NavLink> </li>
                        <li> <NavLink to='/crew/?member=anousheh'></NavLink> </li>
                    </ul>

                    <div>
                        <h3> {member.role} </h3>
                        <h1> {member.name} </h1>
                        <p> {member.bio} </p>
                    </div>
                </div>
            </div>
        </main>
    </div>)
}

export default Crew;