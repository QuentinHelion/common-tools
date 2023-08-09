import PropTypes from "prop-types";
// import '../../styles/index.css';
import './Button.css';

const Button = ({inner, link}) => {
    return (
        <a className="btn btn-primary" href={link}>{inner}</a>
    )
}

Button.propTypes = {
    inner: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default Button;