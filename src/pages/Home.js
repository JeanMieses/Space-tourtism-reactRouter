import Navigation from '../components/Navigation/Navigation';
import classes from './Home.module.css';

const Home = () => {
    return (
        <div className={`${classes.home} main-container`}>
            <Navigation />
            <main>
                <h2>Home</h2>
                <p>
                    Surprise, surprise: Aaron Judge is projected to lead the Yanks in fWAR with an estimated 5.2 wins above replacement, while mashing 36 homers and 95 RBI. He’s not only projected to lead the team in fWAR, but also in OPS+, BABIP, slugging, and on-base percentage. That’s a heck of a season for someone who is entering free agency.
                    Surprise, surprise: Aaron Judge is projected to lead the Yanks in fWAR with an estimated 5.2 wins above replacement, while mashing 36 homers and 95 RBI. He’s not only projected to lead the team in fWAR, but also in OPS+, BABIP, slugging, and on-base percentage. That’s a heck of a season for someone who is entering free agency.
                </p>
                
            </main>
        </div>
    )
}


export default Home;