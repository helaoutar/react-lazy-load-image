/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';
import LazyLoadImage from './LazyLoadImage';

describe('LazyLoadImage', () => {
  it('should render an img', () => {
    const wrapper = shallow(<LazyLoadImage src="src" />);
    expect(wrapper.find('img').exists()).toBe(true);
  });
});
