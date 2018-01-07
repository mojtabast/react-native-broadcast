import React from 'react'
import { View, requireNativeComponent } from 'react-native'
import PropTypes from 'prop-types';

class BroadcastView extends React.Component {
  render () {
    return <RNBroadcastView {...this.props} />
  }
}

BroadcastView.propTypes = {
  /**
   * cameraPosition: 'front' or 'back'
   * publish: If an rtmpURL is provided, will start publishing.
              If empty string provided, will stop publishing.
   */
  ...View.propTypes,
  cameraPosition: PropTypes.string,
  publish: PropTypes.string
}

var RNBroadcastView = requireNativeComponent('RNBroadcastView', BroadcastView)

module.exports = BroadcastView
