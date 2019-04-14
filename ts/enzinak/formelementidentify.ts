export class FormElementIdentify {
	/**
	 * Checks that an element has a non-empty `name` and `value` property.
	 * param  {Element} element  the element to check
	 * return {Boolean} true if the element is an input, false if not
	 */
	public static isValidElement(element: HTMLInputElement): boolean {
		return (!!element.name && !!element.value) ? true : false;
	};

	/**
	 * Checks if an element’s value can be saved (e.g. not an unselected checkbox).
	 * param  {Element} element  the element to check
	 * return {Boolean} true if the value should be added, false if not
	 */
	public static isValidValue(element: HTMLInputElement): boolean {
		return (!(['checkbox', 'radio'].indexOf(element.type) >= 0) || element.checked) ? true : false;
	};

	/**
	 * Checks if an input is a checkbox, because checkboxes allow multiple values.
	 * param  {Element} element  the element to check
	 * return {Boolean} true if the element is a checkbox, false if not
	 */
	public static isCheckbox(element: HTMLInputElement): boolean {
		return (element.type === 'checkbox') ? true : false;
	}

	/**
	 * Checks if an input is a `select` with the `multiple` attribute.
	 * param  {Element} element  the element to check
	 * return {Boolean} true if the element is a multiselect, false if not
	 */
	public static isMultiSelect(element: HTMLSelectElement): boolean {
		return (element.options && element.multiple) ? true : false;
	}
}