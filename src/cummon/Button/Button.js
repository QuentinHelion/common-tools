import PropTypes from "prop-types";

const Button = ({inner, event}) => {
    return (
        <button onClick={event}>{inner}</button>
    )
}

Button.propTypes = {
    inner: PropTypes.string.isRequired,
    event: PropTypes.any
}

export default Button;