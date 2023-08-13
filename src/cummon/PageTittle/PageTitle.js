import React from 'react';
import PropTypes from 'prop-types';
import './PageTitle.css'

const PageTitle = ({title}) => {
    return (
        <div className="mb-5">
            <h1 className="text-center">{title}</h1>
        </div>
    )
}

PageTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default PageTitle;