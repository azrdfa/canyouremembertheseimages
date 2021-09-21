import {
    QuestionCard
} from "../../components"

const imagesPath = process.env.PUBLIC_URL + `/assets/images`
const CobaPage = () => {
    return (
        <div style={{margin: "20px"}}>
            <QuestionCard
                src={`${imagesPath}/anime/anime-0.png`}
                handleClick={() => {}}
            />
        </div>
    )
}

export default CobaPage
