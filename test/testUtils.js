import checkPropTypes from 'check-prop-types'

export const findByTestAttr = (wrapper, value) => {
	return wrapper.find(`[data-test='${value}']`)
}

export const checkProps = (component, conformingProps) => {
	const propError = checkPropTypes(
		component.propTypes,
		conformingProps,
		'prop',
		component.name
	)
	//No error will mean undefined
	expect(propError).toBeUndefined()
}
