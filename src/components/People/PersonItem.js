import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';

function PersonItem({ data, navigation }) {

  return (
    <ListItem
      roundAvatar
      avatar={IMAGES['img' + data.id]}
      key={data.key}
      title={data.alias}
      subtitle={data.position}
      onPress={() => navigation.navigate('Member', { data: data })}
      containerStyle={styles.item}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const IMAGES = {
  img1: require(`../../assets/j1.png`),
  img2: require(`../../assets/z1.png`),
  img3: require(`../../assets/m1.png`),
  img4: require(`../../assets/d1.png`),
  img5: require(`../../assets/da1.png`),
  img6: require(`../../assets/l1.png`),
  img7: require(`../../assets/w1.png`),
  img8: require(`../../assets/da1.png`),
}

PersonItem.propTypes = {
  data: PropTypes.object,
  navigation: PropTypes.any,
};

export default PersonItem;
