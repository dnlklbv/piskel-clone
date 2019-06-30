import React from 'react';

const FrameList = () => {
  const frames = [1, 2, 3, 4, 5, 6, 7];
  const frameItems = frames.map(frame => (
    <li className="frame-item" draggable="true">
      <span className="frame-item__number">{frame}</span>
      <button type="button" className="frame-item__delete" title="delete frame" />
      <button type="button" className="frame-item__copy" title="copy frame" />
    </li>
  ));
  return (
    <div className="frame-list-wrapper">
      <ul className="frame-list">
        {frameItems}
      </ul>
      <button type="button" className="frame-list-wrapper__button" title="add frame" />
    </div>
  );
};

export default FrameList;
