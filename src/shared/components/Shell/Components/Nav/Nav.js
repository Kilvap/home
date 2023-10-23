import GithubIcon from '../Icons/Github/GithubIcon';
import HomeIcon from '../Icons/Home/HomeIcon';
import InfoIcon from '../Icons/Info/InfoIcon';

import styles from './Nav.module.scss';

export default function Nav(props) {
    return (
        <div className={styles.nav}>
            <div className={styles.navIsland}>
                { props.links["home"] && <HomeIcon className={styles.navButton} link={props.links["home"]} /> }
                { props.links["info"] && <InfoIcon className={styles.navButton} link={props.links["info"]} /> }
                { props.links["github"] && <GithubIcon className={styles.navButton} link={props.links["github"]} /> }
            </div>
        </div>
    )
}
