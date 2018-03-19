import React from 'react';
import renderer from 'react-test-renderer';
import Component from './AlignItems';

it('renders without crashing', () => {
  const tree = renderer.create(<Component/>).toJSON();
  expect(tree).toMatchSnapshot();
});
