import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const {level} = useContext(ChallengesContext)
    
    return (
        <div className={styles.profileConteiner}>
            <img src="https://scontent.fmoc1-1.fna.fbcdn.net/v/t1.0-9/34050780_1514172332025447_8043919278014988288_n.jpg?_nc_cat=108&ccb=3&_nc_sid=09cbfe&_nc_ohc=EMlSgq1KZmcAX9flk2y&_nc_oc=AQlTz9UktxsJZt8Pe3NKA18ce1S0g0VGvtFKrkdqffuXrLXSTP0AWO4Ks51QF0AIvik&_nc_ht=scontent.fmoc1-1.fna&oh=0530c4ffc43099b5526093e5c62fac4b&oe=605E54AB" alt=""/>
            <div>
                <strong>Victor Edward</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}