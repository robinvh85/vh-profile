import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { Map } from 'immutable';

import SamplesPage from '.';

const mockStore = configureStore();
let state = Map({});
const store = mockStore(() => state);

describe('<SamplesPage />', () => {
  it('should render', () => {
    const wrapper = shallow(
      <SamplesPage store={store} />
    )

    expect(wrapper).toBeDefined();
  });
});
