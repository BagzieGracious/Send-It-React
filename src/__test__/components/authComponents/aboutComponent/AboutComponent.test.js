import React from 'react';
import { shallow } from 'enzyme';
import AboutComponent from '../../../../components/authComponents/aboutComponent';

describe('AboutComponent test', () => {
	it('should render without crashing', () => {
		const wrapper = shallow(<AboutComponent />);
		expect(wrapper).toMatchSnapshot();
	});
});
