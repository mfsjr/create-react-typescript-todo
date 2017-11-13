import * as React from 'react'
import FilterLink from '../containers/FilterLink'
import {VisibilityFilterId} from "../constants/index";

const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink visibilityFilter={VisibilityFilterId.ShowAll}>
            All
        </FilterLink>
        {', '}
        <FilterLink visibilityFilter={VisibilityFilterId.ShowActive}>
            Active
        </FilterLink>
        {', '}
        <FilterLink visibilityFilter={VisibilityFilterId.ShowCompleted}>
            Completed
        </FilterLink>
    </p>
);

export default Footer