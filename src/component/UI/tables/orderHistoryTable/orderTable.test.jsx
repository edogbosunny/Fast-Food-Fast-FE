import React from 'react';
import { shallow } from 'enzyme';
import { tableProps } from '../../../../__mocks__/orderHistoryMock';
import { OrderHistoryTable, mapStateToProps } from './OrderHistoryTable';

describe('orderHistore component test-suit', () => {
  it('should match snapshot', () => {
    localStorage.setItem('jwtToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlclJvbGUiOiJ1c2VyIiwiaWF0IjoxNTQ5NTIyNzYwLCJleHAiOjE1NDk2MDkxNjB9.CI4Tg7J87RH-fOaqjZ4l6JsE4Jjl-Ai1gtkPtiJqMbo');
    localStorage.setItem('userId', 1);
    localStorage.setItem('userRole', 'user');
    const wrapper = shallow(<OrderHistoryTable {...tableProps} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.debug();
  });

  xit('should test mapStateToProps', () => {
    const state = mapStateToProps(mapStateToProps);
    expect(state).toBeTruthy();
  });
});
