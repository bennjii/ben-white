import { useRouter } from 'next/router'
import { useEffect } from 'react';
import styles from '../../styles/Home.module.css'

const Post = () => {
    const router = useRouter()

    useEffect(() => {
        const { githubName } = router.query;

        if(githubName) router.push(`https://github.com/UnRealReincarlution/${githubName}`)     
    }, [router])


    return (
        <div className={styles.redirect}>
            <p>Redirecting...</p>
        </div>
    )
}

export default Post