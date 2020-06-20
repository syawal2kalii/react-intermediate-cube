import React from 'react'
import propTypes from 'prop-types'
export default function Button(props) {
    const {className}=props;
    return (
        <div>          
            <button className={className}>OK</button>
        </div>
    )
    Button.propTypes = {
        isPrimary:propTypes.string,
       };
}
