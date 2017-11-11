import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { loadPeople } from '../../actions/people';
import PeopleList from '../../components/People/PeopleList';

class PeopleScreen extends React.Component {

  componentWillMount() {
    this.props.loadPeople();
  }

  render() {
    return <PeopleList members={this.props.members} navigation={this.props.navigation} />
  }
}

PeopleScreen.propTypes = {
  loadPeople: PropTypes.func.isRequired,
  members: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array,
  ]),
};

const mapStateToProps = state => ({
  members: state.people.members,
})

function mapDispatchToProps(dispatch) {
  return {
    loadPeople: () => {
      dispatch(loadPeople());
    },
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(PeopleScreen);