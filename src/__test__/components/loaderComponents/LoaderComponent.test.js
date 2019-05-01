import React from 'react';
import { shallow } from 'enzyme';
import LoaderComponent from '../../../components/loaderComponent';

describe('LoaderComponent test', () => {
	it('should render without crashing', () => {
		const wrapper = shallow(<LoaderComponent />);
		expect(wrapper).toMatchSnapshot();
	});
});
