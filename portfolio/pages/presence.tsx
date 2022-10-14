import { PresenceCard } from "@components/presence_card"

export const Home: React.FC<{}> = () => {
    return (
            <PresenceCard minimal={false} profile={false} />
    )
}

export default Home