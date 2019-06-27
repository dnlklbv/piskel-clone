import React from 'react';

import Toolbar from '../Toolbar';

const App = () => (
  <div className="container">
    <aside className="container__sidebar">
      <Toolbar />
    </aside>
    <main className="container__main-section" />
    <aside className="container__sidebar" />
  </div>
);

export default App;
