import * as React from 'react';

export interface LinkProps {
    active: boolean,
    // was PropTypes.node, translates to JSX.Element,
    // see https://stackoverflow.com/questions/45519567/what-is-the-typescript-equivalent-of-react-proptypes-node
    children: JSX.Element,
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