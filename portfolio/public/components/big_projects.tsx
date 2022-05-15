import styles from "../../styles/Home.module.css"
import Button from "./button"

export const BigProj_ = () => {
    return (
        <div>
            <div className={styles.project} onClick={() => window.location.href == "./study/transcribe"}>
                        <div className={styles.h2Roller}>
                            <h2>01</h2>
                            <hr />
                            <h2>TRANSCRIBE</h2>
                        </div>
    
                        <div>
                            <h1>transcribe</h1>
                            <p>fast & performant text editor</p>
                            <Button title={"case study"} href="./study/transcribe"></Button>
                        </div>
                    </div>
    
                    <div className={styles.project}>
                        <div className={styles.h2Roller}>
                            <h2>02</h2>
                            <hr />
                            <h2>LEARN TO CODE</h2>
                        </div>
    
                        <div>
                            <h1>learn to code</h1>
                            <p>teaching others how to code</p>
                            <Button title={"case study"} href="./study/learn-to-code"></Button>
                        </div>
                    </div>
    
                    <div className={styles.project} >
                        <div className={styles.h2Roller}>
                            <h2>03</h2>
                            <hr />
                            <h2>FORTITUDE</h2>
                        </div>
    
                        <div>
                            <h1>fortitude</h1>
                            <p>advanced discord clone</p>
                            <Button title={"github"} href="https://github.com/bennjii/fortitude"></Button>
                        </div>
                    </div>
    
                    <div className={styles.project} >
                        <div className={styles.h2Roller}>
                            <h2>04</h2>
                            <hr />
                            <h2>DAILY</h2>
                        </div>
    
                        <div>
                            <h1>daily</h1>
                            <p>customisable new-tab chrome extention</p>
                            <Button title={"github"} href="https://github.com/bennjii/daily"></Button>
                        </div>
                    </div>
    
                    <div className={styles.project} >
                        <div className={styles.h2Roller}>
                            <h2>05</h2>
                            <hr />
                            <h2>MACHINE LEARNING</h2>
                        </div>
    
                        <div>
                            <h1>HPP</h1>
                            <p>predicting house prices</p>
                            <Button title={"case study"} href="https://docs.google.com/document/d/1VN26wH46sXJei4uEulj11jcmNTLf8IWalg10tqIFjio/edit?usp=sharing"></Button>
                        </div>
                    </div>
        </div>
    )
}