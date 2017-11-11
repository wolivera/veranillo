import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';

function Member({ navigation }) {
  const data = navigation.state.params.data;
  return (
    <ScrollView>
      <Card
        image={IMAGES['img' + data.id]}
        style={styles.card}
        imageStyle={styles.image}
      >
        <Text style={styles.name}>{data.name.toUpperCase()}</Text>
        <Text style={styles.descriptionTitle}>Perfil</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.qualitiesTitle}>5 verdades (?)</Text>
        { data.qualities.map((q, i) =>
          <Text key={i} style={styles.qualitiesIndex}>
            <Text style={styles.qualitiesIndex}>{i + 1}.&nbsp;&nbsp;</Text>
            <Text style={styles.qualities}>{q}</Text>
          </Text>
        ) }

      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 40,
  },
  image: {
    height: 300,
  },
  name: {
    marginBottom: 20,
    marginTop: 5,
    color: '#757575',
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionTitle: {
    color: 'black',
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 15,
    textAlign: 'left',
  },
  qualitiesTitle: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  qualities: {
    fontWeight: 'normal',
    marginLeft: 8,
  },
  qualitiesIndex: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
    marginRight: 10,
  }
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

Member.propTypes = {
  navigation: PropTypes.object,
};

export default Member;
