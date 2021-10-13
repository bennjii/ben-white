import styles from '@styles/Home.module.css'
import Image from 'next/image'
import signature from '@public/img/signature_2.png'

export const Signature: React.FC<{}> = ({ }) => {
    return (
        <div className={styles.signature}>
            <Image src={signature} alt="Ben White" />
        </div>
    )
}

export default Signature