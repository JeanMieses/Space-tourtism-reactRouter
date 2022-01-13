import { useNavigate } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import classes from './Home.module.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className={`${classes.home} main-container`}>
            <Navigation />
            <main>
                <div>
                    <h2>So, you want to travel to</h2>
                    <h1>Space</h1>
                    <p>
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of on the edge of it.
                        ell sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </div>

                <div onClick={() => navigate('/destination?location=europa', { replace: false })} className={classes.explore}>
                    <h3>explore</h3>
                </div>

            </main>
        </div>
    )
}


export default Home;