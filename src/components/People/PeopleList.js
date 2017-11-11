import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView } from 'react-native';
import { List } from 'react-native-elements';

import PersonItem from './PersonItem';

const PeopleList = ({ members, navigation }) => {
  if (members) {
    return (
      <ScrollView>
        <List style={styles.list}>
          {
            members.map((m, i) => (
              <PersonItem key={m.id} data={m} navigation={navigation} />
            ))
          }
        </List>
      </ScrollView>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  list: {
    margin: 0,
  },
});

PeopleList.propTypes = {
  navigation: PropTypes.any,
  members: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array,
  ]),
};

export default PeopleList;
