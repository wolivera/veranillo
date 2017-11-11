import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Tile, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { loadRandomQuote } from '../../actions/quotes';

class QuotesScreen extends React.Component {
  componentWillMount() {
    this.props.loadRandomQuote();
  }

  handleNextQuote() {
    this.props.loadRandomQuote();
  }

  render() {
    const { quote } = this.props;
    if (!quote) return null;
    return (
      <View style={styles.backdrop}>
        <Text style={styles.title}>
          {quote.type}
        </Text>
        <Text style={styles.text}>
          {`"${quote.text}"`}
        </Text>
        <Text style={styles.author}>
          {quote.author}
        </Text>
        <Button
          containerViewStyle={styles.button}
          title="Siguiente"
          onPress={() => this.handleNextQuote()}
          backgroundColor="#FB8C00"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2d2725',
  },
  text: {
    fontSize: 26,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#353539',
    marginTop: 20,
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#353539',
  },
  button: {
    marginTop: 40,
    width: '80%'
  }
});


QuotesScreen.propTypes = {
  loadRandomQuote: PropTypes.func.isRequired,
  quote: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
};

const mapStateToProps = state => ({
  quote: state.quotes.quote,
})

function mapDispatchToProps(dispatch) {
  return {
    loadRandomQuote: () => {
      dispatch(loadRandomQuote());
    },
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(QuotesScreen);
