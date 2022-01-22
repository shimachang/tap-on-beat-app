import TapBody from "./TapBody";

const TapContainer = ({ tapIndex, tastingSubmit }) => {
    return (
        <div className="mx-4">
            <TapBody tapIndex={tapIndex} tastingSubmit={tastingSubmit} />
        </div>
    );
};
export default TapContainer;
