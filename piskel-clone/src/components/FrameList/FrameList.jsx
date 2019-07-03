import React from 'react';
import PropTypes from 'prop-types';

const FrameList = (props) => {
  const {
    frameList, currentFrameNumber, addFrame, selectFrame, deleteFrame, duplicateFrame, swapFrames,
  } = props;

  const handleFrameDarg = ({ nativeEvent }) => {
    // define first swapping frame number
    const firstFrameNumber = nativeEvent.target.dataset.framenumber;

    // define drag end element
    let secondFrame = document.elementFromPoint(nativeEvent.clientX, nativeEvent.clientY);

    // look for framenumber data attribute in drag end element and its parents
    let secondFrameNumber = secondFrame.dataset.framenumber;
    while (secondFrameNumber === undefined && secondFrame.parentElement) {
      secondFrame = secondFrame.parentElement;
      secondFrameNumber = secondFrame.dataset.framenumber;
    }

    // check if frame numbers was found
    if (!firstFrameNumber || !secondFrameNumber) return;

    // convert string to number in frame numbers and pass to action
    swapFrames({ firstFrameNumber: +firstFrameNumber, secondFrameNumber: +secondFrameNumber });
  };

  const frameItems = frameList.map((frame, frameNumber) => (
    <li
      className={frameNumber === currentFrameNumber ? 'frame-item frame-item_selected' : 'frame-item'}
      draggable="true"
      key={frameNumber.toString()}
      data-framenumber={frameNumber}
      style={{ backgroundImage: frame ? `url(${frame})` : '' }}
      onDragEnd={handleFrameDarg}
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
  swapFrames: PropTypes.func.isRequired,
};

export default FrameList;
