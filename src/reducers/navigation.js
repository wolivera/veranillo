import NavigationContainer from '../containers/Navigation';

export default (state, action) => NavigationContainer.router.getStateForAction(action, state);
