import PropTypes from "prop-types";
// import '../../styles/index.css';
import './ButtonLink.css';

const ButtonLink = ({inner, link}) => {
    return (
        <a className="btn btn-primary" href={link}>{inner}</a>
    )
}

ButtonLink.propTypes = {
    inner: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default ButtonLink;