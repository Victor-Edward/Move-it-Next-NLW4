import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengeContext'
import styles from '../styles/components/completedChallenges.module.css'

export function CompletedChallenges() {
    const {challengeCompleted} = useContext(ChallengesContext)
    
    return (
        <div className={styles.completedChallengesConteiner}>
            <span>Desafios completos</span>
            <span>{challengeCompleted}</span>
        </div>
    )
}