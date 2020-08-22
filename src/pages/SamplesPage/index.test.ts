import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { Map } from 'immutable';

import HomePage from '.';

const mockStore = configureStore();
let state = Map({});
const store = mockStore(() => state);

describe('<HomePage />', () => {
  it('should render', () => {
    const wrapper = shallow(
      <HomePage store={store} />
    )

    expect(wrapper).toBeDefined();
  });
});
