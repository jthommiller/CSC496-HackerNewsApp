import React from 'react';
import App, {Search, Table} from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';


configure({ adapter: new Adapter() });

it('Table is Rendered', () => {
  const wrapper = shallow(<App/>);
  const tag = wrapper.find(Table);
  expect(tag.exists()).toEqual(true);
});

it('Search button has text set to "Search"', () => {
  const wrapper = shallow(<Search>Search</Search>);
  expect(wrapper.text()).toEqual('Search');
});

