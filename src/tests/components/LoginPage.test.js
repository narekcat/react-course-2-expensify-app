import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let startLogin;
let wrapper;

beforeEach(() => {
  startLogin = jest.fn();
  wrapper = shallow(<LoginPage startLogin={startLogin} />);
});

test('should render LoginPAge correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button call', () => {
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});