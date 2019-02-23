//@flow
import * as React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './EmptySpaceContainer.style';

/**
 * Container for empty spaces on screens with empty lists etc.
 */
class EmptySpaceContainer extends React.Component {
  constructor(props) {
    super(props);

    this.renderDefaultMessage = this.renderDefaultMessage.bind(this);
    this.renderEmptySpace = this.renderEmptySpace.bind(this);
  }

  renderDefaultMessage() {
    const defaultMsg = 'No data available';
    const { message } = this.props;
    return <Text>{message || defaultMsg}</Text>;
  }

  renderEmptySpace() {
    const { onRenderEmptySpace, showEmptySpace } = this.props;

    if (showEmptySpace === true) {
      if (onRenderEmptySpace) {
        return onRenderEmptySpace();
      }
      return this.renderDefaultMessage();
    }
    return null;
  }

  render() {
    const { showEmptySpace } = this.props;
    return (
      <View style={[Styles.container, this.props.style]}>
        <View style={Styles.emptySpaceContainer}>
          {this.renderEmptySpace()}
        </View>
        {!showEmptySpace && (
          <View style={Styles.childrenContainer}>{this.props.children}</View>
        )}
      </View>
    );
  }
}

EmptySpaceContainer.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
  message: PropTypes.string,
  showEmptySpace: PropTypes.bool,
  onRenderEmptySpace: PropTypes.func,
};

export default EmptySpaceContainer;
