import React from 'react';
import PropTypes from 'prop-types';

const Toolbar = (props) => {
  const {
    currentTool, primaryColor, secondaryColor,
    selectTool, selectPrimaryColor, selectSecondaryColor, swapColors,
  } = props;

  const onToolSelect = (event) => {
    const { tool } = event.target.dataset;
    selectTool(tool);
  };

  const onPrimaryColorChange = (event) => {
    const { value } = event.target;
    selectPrimaryColor(value);
  };

  const onSecondaryColorChange = (event) => {
    const { value } = event.target;
    selectSecondaryColor(value);
  };

  const onSwapColors = () => {
    swapColors();
  };

  const toolList = ['pen', 'mirror-pen', 'fill', 'fill-same', 'eraser', 'dithering', 'lighten', 'darken', 'rectangle', 'line', 'circle'];

  const toolButtons = toolList.map((tool) => {
    let buttonClass = 'tool-button';
    if (tool === currentTool) buttonClass += ' tool-button--selected';
    return (
      <li
        key={tool}
        className="toolbar__item"
      >
        <button
          type="button"
          className={buttonClass}
          style={{ backgroundImage: `url(./img/icon-${tool}.png)` }}
          title={tool}
          data-tool={tool}
          onClick={onToolSelect}
        />
      </li>
    );
  });

  return (

    <div className="toolbar-wrapper">
      <ul className="toolbar">
        {toolButtons}
      </ul>
      <div className="color-selector">
        <input
          className="color-selector__primary"
          type="color"
          title="primary color"
          value={primaryColor}
          onChange={onPrimaryColorChange}
        />
        <input
          className="color-selector__secondary"
          type="color"
          title="secondary color"
          value={secondaryColor}
          onChange={onSecondaryColorChange}
        />
        <button
          type="button"
          className="color-selector__swap"
          title="swap colors"
          onClick={onSwapColors}
        />
      </div>
    </div>
  );
};

Toolbar.propTypes = {
  currentTool: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,

  selectTool: PropTypes.func.isRequired,
  selectPrimaryColor: PropTypes.func.isRequired,
  selectSecondaryColor: PropTypes.func.isRequired,
  swapColors: PropTypes.func.isRequired,
};


export default Toolbar;
