import TapBody from "./TapBody"

const TapContainer = ({tapIndex, setCurrentIndex}) => {
    return (
        <div className='mx-4'>
            <TapBody tapIndex={tapIndex} setCurrentIndex={setCurrentIndex} />
        </div>
    )
}
export default TapContainer