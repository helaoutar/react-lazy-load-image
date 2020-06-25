/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';
import LazyLoadImage from './LazyLoadImage';

describe('LazyLoadImage', () => {
  it('should not render an img when the element isn"t in the view', () => {
    const wrapper = shallow(<LazyLoadImage src="src" />);
    expect(wrapper.find('img').exists()).toBe(false);
  });

  it('should render a loader when the element isn"t in the view', () => {
    const loader = <div className="loader" />;
    const wrapper = shallow(<LazyLoadImage src="src" loader={loader} />);
    expect(wrapper.find('.loader').exists()).toBe(true);
  });
});
