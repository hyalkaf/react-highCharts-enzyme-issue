import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount, shallow } from 'enzyme';

it('fails when trying to mount react highcharts', () => {
  const wrapper = mount(<App />);
});
