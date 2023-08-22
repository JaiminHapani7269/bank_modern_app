import React from 'react'

function Button(props) {
    return (
        <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] rounded-[10px] outline-none ${props.styles}`}>Get Started</button>
    )
}

export default Button
