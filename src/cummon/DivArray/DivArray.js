import PropTypes from 'prop-types';
import './DivArray.css';
import { useNavigate } from "react-router-dom";

const DivArray = ({link, imgRef}) => {

    const nav = useNavigate()
    const handleDivClick = (path) => {
        nav(link);
    };

    return (
        <div id="divElement" className="border shadow-sm rounded-3 p-3" onClick={handleDivClick} >
            <img className="w-10 m-4" src={imgRef} alt="This image can't be loaded"/>
        </div>
    );
}

DivArray.propTypes = {
    link:   PropTypes.string.isRequired,
    imgRef: PropTypes.string.isRequired
}

export default DivArray;