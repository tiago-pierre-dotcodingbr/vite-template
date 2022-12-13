// js
import reducer from './reducers';
import { logoutAuth, updateUser, updateToken } from './actions';

// constants
const actions = {
    logoutAuth,
    updateUser,
    updateToken,
};

export default { actions, reducer };
