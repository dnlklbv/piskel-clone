import React from 'react';
import PropTypes from 'prop-types';

const FrameList = (props) => {
  const {
    frameList, currentFrameNumber, addFrame, selectFrame, deleteFrame, duplicateFrame,
  } = props;
  const frameItems = frameList.map((frame, frameNumber) => (
    <li
      className={frameNumber === currentFrameNumber ? 'frame-item frame-item_selected' : 'frame-item'}
      draggable="true"
      key={frameNumber.toString()}
      style={{ backgroundImage: frame ? `url(${frame})` : '' }}
    >
      <button className="frame-item__select-button" type="button" onClick={() => { selectFrame(frameNumber); }} />
      <span className="frame-item__number">{frameNumber + 1}</span>
      <button type="button" className="frame-item__delete" title="delete frame" onClick={() => { deleteFrame(frameNumber); }} />
      <button type="button" className="frame-item__copy" title="duplicate frame" onClick={() => { duplicateFrame(frameNumber); }} />
    </li>
  ));
  return (
    <div className="frame-list-wrapper">
      <ul className="frame-list">
        {frameItems}
      </ul>
      <button
        type="button"
        className="frame-list-wrapper__button"
        title="add frame"
        onClick={() => { addFrame(); }}
      />
    </div>
  );
};

FrameList.propTypes = {
  frameList: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentFrameNumber: PropTypes.number.isRequired,

  addFrame: PropTypes.func.isRequired,
  selectFrame: PropTypes.func.isRequired,
  deleteFrame: PropTypes.func.isRequired,
  duplicateFrame: PropTypes.func.isRequired,
};

export default FrameList;
