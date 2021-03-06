import { useState, useEffect, useContext } from 'react'
import { CountdownContext } from '../context/CountdownContext'
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
    
   
    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown 
    } = useContext(CountdownContext)
    
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    

    return (
        <div>
            <div className={styles.countdownConteiner}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            <div >
                { hasFinished ? (
                    <button disabled className={styles.countdownButton}>
                        Ciclo concluído!
                    </button> 
                ) : (
                    <>
                    { isActive ? (
                    <button onClick={resetCountdown} type='button' className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                        Abandonar ciclo
                    </button>    
                    ) : (
                    <button onClick={startCountdown} type='button' className={styles.countdownButton}>
                        Iniciar ciclo
                    </button>
                    )}
                    </>
                )}  
            </div>
        </div>
    )
}