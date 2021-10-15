import styles from '@styles/Home.module.css'
import Image from 'next/image'
import signature from '@public/img/signature_3.png'

export const Signature: React.FC<{}> = ({ }) => {
    return (
        <div className={styles.signature}>
            <Image src={signature} alt="Ben White" quality={100} />
        </div>
    )
}

export default Signature