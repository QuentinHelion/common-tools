import PropTypes from "prop-types";
// import '../../styles/index.css';
import './Button.css';

const Button = ({inner, event}) => {
    return (
        <button className="btn btn-primary" onClick={event}>{inner}</button>
    )
}

Button.propTypes = {
    inner: PropTypes.string.isRequired,
    event: PropTypes.any
}

export default Button;