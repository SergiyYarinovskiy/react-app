import React from 'react';
import renderer from 'react-test-renderer';
import Component from './App';

it('renders without crashing', () => {
  const tree = renderer.create(<Component/>).toJSON();
  expect(tree).toMatchSnapshot();
});
