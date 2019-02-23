import * as React from 'react';
import { Button, View, Text } from 'native-base';
import PropTypes from 'prop-types';

const RetryView = ({ style, message, buttonText, onPress }) => (
  <View style={style}>
    <Text style={{ textAlign: 'center' }}>{message}</Text>
    <Button transparent style={{ alignSelf: 'center' }} onPress={onPress}>
      <Text>{buttonText || 'Retry'}</Text>
    </Button>
  </View>
);

RetryView.propTypes = {
  style: PropTypes.object,
  message: PropTypes.string,
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
};

export default RetryView;
