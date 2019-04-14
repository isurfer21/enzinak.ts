import { FormElementIdentify } from './formelementidentify'

export class FormDataMap {
	private form: any;
	private formData: any;

	constructor(formRef: any) {
		this.form = formRef;
		this.formData = null;
	}

	private filterSelectedValues(options: any): any[] {
		let values: any[] = [];
		for (let i in options) {
			options[i].selected ? values.concat(options[i].value) : values;
		}
		return values;
	}

	private fetchElementValues(element: any): void {
		// Make sure the element has the required properties and should be added.
		if (FormElementIdentify.isValidElement(element) && FormElementIdentify.isValidValue(element)) {
			if (FormElementIdentify.isCheckbox(element)) {
				this.formData[element.name] = (this.formData[element.name] || []).concat(element.value);
			} else if (FormElementIdentify.isMultiSelect(element)) {
				this.formData[element.name] = this.filterSelectedValues(element);
			} else {
				this.formData[element.name] = element.value;
			}
		}
	}

	public generate(): any {
		this.formData = {};
		for (let i = 0; i < this.form.length; i++) {
			this.fetchElementValues(this.form[i]);
		}
		return this.formData;
	}
}