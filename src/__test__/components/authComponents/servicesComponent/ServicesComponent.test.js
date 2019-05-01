import React from 'react';
import { shallow } from 'enzyme';
import ServicesComponent from '../../../../components/authComponents/servicesComponent';

describe('ServicesComponent test', () => {
	it('should render without crashing', () => {
		const wrapper = shallow(<ServicesComponent />);
		expect(wrapper).toMatchSnapshot();
	});
});
