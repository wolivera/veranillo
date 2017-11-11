import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import Navigation from './containers/Navigation';

export class AppWithNavigationState extends Component {
  render() {
    const { dispatch, navigation } = this.props;

    return (
      <Navigation navigation={addNavigationHelpers({ dispatch, state: navigation })} />
    );
  }
}

export const mapStateToProps = ({ navigation }) => ({ navigation });

export default connect(mapStateToProps)(AppWithNavigationState);
