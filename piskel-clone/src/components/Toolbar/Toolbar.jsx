import React from 'react';

const Toolbar = () => {
  const toolList = ['pen', 'mirror-pen', 'fill', 'eraser'];
  const toolButtons = toolList.map(tool => (
    <li
      key={tool}
      className="toolbar__item"
    >
      <button
        type="button"
        className="tool-button"
        style={{ backgroundImage: `url(./img/icon-${tool}.png)` }}
        data-tool={tool}
      />
    </li>
  ));

  return (

    <div className="toolbar-wrapper">
      <ul className="toolbar">
        {toolButtons}
      </ul>
      <div className="color-selector">
        <input
          className="color-selector__primary"
          type="color"
        />
        <input
          className="color-selector__secondary"
          type="color"
        />
        <button
          type="button"
          className="color-selector__swap"
        />
      </div>
    </div>
  );
};


export default Toolbar;
