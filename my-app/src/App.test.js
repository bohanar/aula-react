import React from 'react';
import ReactDOM from 'react-dom';
import Usuario from './Usuario';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Usuario />, div);
});
