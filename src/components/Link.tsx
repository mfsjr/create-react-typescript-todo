import * as React from 'react';

export interface LinkProps {
    active: boolean,
    children: JSX.Element, // PropTypes.node
    onClick: () => any
}

function Link({onClick, active, children}: LinkProps) {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <a
            href="#"
            onClick={e => {
                e.preventDefault();
                onClick()
            }}
        >
            {children}
        </a>
    )
}

export default Link;