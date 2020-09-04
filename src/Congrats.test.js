import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAttr, checkProps } from '../test/testUtils'

import Congrats from './Congrats'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const defaultProps = {
	success: false,
}

const setup = (props = {}) => {
	//double spread means that props will overide any common keys if it is passed,
	//otherwise default props are used

	const setupProps = { ...defaultProps, ...props }
	return shallow(<Congrats {...setupProps} />)
}

test('renders without error', () => {
	const wrapper = setup({ success: false })
	const component = findByTestAttr(wrapper, 'component-congrats')
	expect(component.length).toBe(1)
})

test('renders no text when success prop is false', () => {
	const wrapper = setup({ success: false })
	const component = findByTestAttr(wrapper, 'component-congrats')
	expect(component.text()).toBe('')
})

test('renders a message when success prop is true', () => {
	const wrapper = setup({ success: true })
	const component = findByTestAttr(wrapper, 'congrats-message')
	expect(component.text().length).not.toBe(0)
})

test('does not throw error when expected props are received', () => {
	const expectedProps = { success: false }
	checkProps(Congrats, expectedProps)
})
