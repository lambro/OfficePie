import React from 'react';
import App from './App';
import HelloWorldApp from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

// it('displays the text hello world', () => {
//   const component = renderer.create(<HelloWorldApp />).toJSON();
//   const expected = ["Hello world!"]
//   expect(component.children).toEqual(expected)
// })
