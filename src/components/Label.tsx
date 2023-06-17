import React from 'react'

const Label = ({ className, children, ...props }) => (
    <label
        className={`${className ? className : ''} block font-medium text-sm text-gray-700`}
        { ...props }>
        { children }
    </label>
)

export default Label
