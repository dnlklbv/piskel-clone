import React from 'react';

import Toolbar from '../Toolbar';
import FrameList from '../FrameList';
import Canvas from '../Canvas';

const App = () => (
  <div className="container">
    <aside className="container__sidebar">
      <Toolbar />
      <FrameList />
    </aside>
    <main className="container__main-section">
      <Canvas />
    </main>
    <aside className="container__sidebar" />
  </div>
);

export default App;
