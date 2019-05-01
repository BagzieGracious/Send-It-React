import React from 'react';
import { shallow } from 'enzyme';
import StatsComponent from '../../../../components/authComponents/statsComponent';

describe('StatsComponent test', () => {
	it('should render without crashing', () => {
		const wrapper = shallow(<StatsComponent />);
		expect(wrapper).toMatchSnapshot();
	});
});
