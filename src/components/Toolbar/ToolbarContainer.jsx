import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import {
  selectTool, selectPrimaryColor, selectSecondaryColor, swapColors,
} from '../../store/tools/actions';

import Toolbar from './Toolbar';

const ToolbarContainer = (props) => {
  const {
    currentTool, primaryColor, secondaryColor,
    selectToolConnect, selectPrimaryColorConnect, selectSecondaryColorConnect, swapColorsConnect,
  } = props;

  return (
    <Toolbar
      currentTool={currentTool}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}

      selectTool={selectToolConnect}
      selectPrimaryColor={selectPrimaryColorConnect}
      selectSecondaryColor={selectSecondaryColorConnect}
      swapColors={swapColorsConnect}
    />
  );
};

ToolbarContainer.propTypes = {
  currentTool: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,

  selectToolConnect: PropTypes.func.isRequired,
  selectPrimaryColorConnect: PropTypes.func.isRequired,
  selectSecondaryColorConnect: PropTypes.func.isRequired,
  swapColorsConnect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentTool: state.tools.currentTool,
  primaryColor: state.tools.primaryColor,
  secondaryColor: state.tools.secondaryColor,
});

const mapDispatchToProps = {
  selectToolConnect: selectTool,
  selectPrimaryColorConnect: selectPrimaryColor,
  selectSecondaryColorConnect: selectSecondaryColor,
  swapColorsConnect: swapColors,
};


export default connect(mapStateToProps, mapDispatchToProps)(ToolbarContainer);
