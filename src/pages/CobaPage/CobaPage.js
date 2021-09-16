import {
    MediumCard
} from "../../components"

const imagesPath = process.env.PUBLIC_URL + `/assets/images`
const CobaPage = () => {
    return (
        <>
            <MediumCard
                label="Image #1"
                src={`${imagesPath}/anime/anime-0.png`}
                handleClick={() => {}}
            />
        </>
    )
}

export default CobaPage
