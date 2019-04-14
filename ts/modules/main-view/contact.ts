import { ViewStack } from "enzinak/viewstack";
import { Vision } from 'enzinak/vision';
import { Style } from 'enzinak/style';
import { Anchor } from "enzinak/anchor";
import { Incident } from "enzinak/incident";
import { FormDataValidate } from "enzinak/formdatavalidate";
import { FormDataMap } from "enzinak/formdatamap";

export class Contact {
	private uid = 'contact';

	private views: ViewStack;
	private formDataValidate: FormDataValidate;
	private formDataMap: FormDataMap;

	private containerSelf: HTMLElement;

	private containerAnchor: NodeList;
	private controlAnchor: Incident;

	private containerForm: HTMLElement;

	private containerSubmit: HTMLElement;
	private controlSubmit: Incident;

	private containerMessage: HTMLElement;

	private readonly i18n = {
		status: {
			success: "Done!",
			failure: "Try again!"
		},
		validations: {
			required_name: "Please enter your name",
			required_gender: "Please select your gender",
			required_email: "Please enter your email address",
			invalid_email: "Please enter a valid email address",
			required_phone: "Please enter your phone",
			invalid_phone: "Please enter a valid phone",
			required_relation: "Please select your relation",
			required_comment: "Please enter your comment",
			required_permit: "Please check to permit",
		}
	};

	constructor(views: ViewStack) {
		this.views = views;

		this.containerSelf = <HTMLElement>document.getElementById(this.uid);

		this.containerAnchor = this.containerSelf.querySelectorAll('a[href="#"]');
		this.controlAnchor = new Incident(this.containerAnchor);

		this.containerForm = <HTMLElement>this.containerSelf.querySelector('form#contact_form');

		this.containerSubmit = <HTMLElement>this.containerForm.querySelector('button[type="submit"]');
		this.controlSubmit = new Incident(this.containerSubmit);

		this.containerMessage = <HTMLElement>this.containerForm.querySelector('.feedback');

		this.formDataValidate = new FormDataValidate();
		this.formDataMap = new FormDataMap(this.containerForm);
	}
	private onValidationError(fieldname: string, valid: boolean, message: string) {
		let fieldWrapperName: string = this.uid + '_' + fieldname;
		let fieldWrapper: HTMLElement = <HTMLElement>this.containerForm.querySelector('#' + fieldWrapperName + ' .error');
		if (!valid) {
			Vision.show(fieldWrapper);
			Style.addClass(fieldWrapper, 'danger');
			fieldWrapper.innerHTML = message;
		} else {
			Vision.hide(fieldWrapper);
			fieldWrapper.innerHTML = '';
		}
	}
	private onSubmit(e: Event) {
		e.preventDefault();

		let values = this.formDataMap.generate();
		console.log('Contact.onSubmit:', values);

		Style.removeClass(this.containerMessage, 'success danger');
		if (this.formDataValidate.isValid(values)) {
			this.containerMessage.innerHTML = this.i18n.status.success;
			Style.addClass(this.containerMessage, 'success');
		} else {
			this.containerMessage.innerHTML = this.i18n.status.failure;
			Style.addClass(this.containerMessage, 'danger');
		}
		Vision.show(this.containerMessage);
	}
	private changeView(e: Event) {
		let link = Anchor.handleAnchor(e);
		if (!!link) {
			this.views.activate(link);
		}
	}
	public destroy() {
		console.log('modules.Contact.destroy');
		this.controlAnchor.off('click');
		this.controlSubmit.off('click');
	}
	public initialize() {
		console.log('modules.Contact.initialize');
		this.controlAnchor.on('click', this.changeView, this);
		this.controlSubmit.on('click', this.onSubmit, this);

		let validations = {
			name: {
				Required: this.i18n.validations.required_name
			},
			gender: {
				Required: this.i18n.validations.required_gender
			},
			email: {
				Required: this.i18n.validations.required_email,
				Email: this.i18n.validations.invalid_email
			},
			phone: {
				Required: this.i18n.validations.required_phone,
				Telephone: this.i18n.validations.invalid_phone
			},
			relation: {
				Required: this.i18n.validations.required_relation
			},
			comment: {
				Required: this.i18n.validations.required_comment
			},
			permit: {
				Required: this.i18n.validations.required_permit
			}
		};

		this.formDataValidate.setFieldWrapperPrefix(this.uid + '_');
		this.formDataValidate.setFieldValidations(validations);
		this.formDataValidate.setErrorCallback(this.onValidationError.bind(this));
	}
}