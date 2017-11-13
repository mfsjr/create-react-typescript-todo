import {connect, Dispatch} from 'react-redux'
import {VisibilityFilterId} from "../constants/index";
import Link, {LinkProps} from '../components/Link'
import {DataState, VisibilityFilter} from "../types/index";
import {ActionId, SetVisibilityFilter} from "../actions/index";

/** Passed in as attributes */
interface FilterLinkProps extends VisibilityFilter {
    visibilityFilter: VisibilityFilterId
}

const mapStateToProps = (state: DataState, ownProps: FilterLinkProps): Partial<LinkProps> => {
    return {
        active: ownProps.visibilityFilter === state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch: Dispatch<SetVisibilityFilter>, ownProps: FilterLinkProps): Partial<LinkProps> => {
    return {
        onClick: () => { // here is our replacement for an action creator function, a type-checked object literal
            let action: SetVisibilityFilter = {type: ActionId.Set_VisibilityFilter, visibilityFilter: ownProps.visibilityFilter};
            dispatch(action);
        }
    }
};

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink
