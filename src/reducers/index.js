import { combineReducers } from 'redux';

import sort from './sort';
import search from './search';
import results from './results';

export default combineReducers({
    sort,
    search,
    results
});
