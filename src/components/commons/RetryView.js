import * as React from 'react';
import { Button, View, Text } from 'native-base';
import PropTypes from 'prop-types';

class RetryView extends React.Component {
  render() {
    const { style, message, buttonText, onPress } = this.props;
    return (
      <View style={style}>
        <Text>{message}</Text>
        <Button transparent style={{ alignSelf: 'center' }} onPress={onPress}>
          <Text>{buttonText || 'Retry'}</Text>
        </Button>
      </View>
    );
  }
}

RetryView.propTypes = {
  style: PropTypes.object,
  message: PropTypes.string,
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
};

export default RetryView;
