import React from 'react';

const Preview = () => (
  <div className="preview-wrapper">
    <div className="preview">
      <button type="button" className="preview__button" />
    </div>
    <div className="preview-control">
      <p>FPS:</p>
      <input className="preview-control__range" type="range" min="1" max="24" />
      <p>12</p>
    </div>
  </div>
);

export default Preview;
