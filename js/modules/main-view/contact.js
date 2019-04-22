define(["require", "exports", "enzinak/vision", "enzinak/style", "enzinak/anchor", "enzinak/incident", "enzinak/formdatavalidate", "enzinak/formdatamap"], function (require, exports, vision_1, style_1, anchor_1, incident_1, formdatavalidate_1, formdatamap_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Contact {
        constructor(views) {
            this.uid = 'contact';
            this.i18n = {
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
            this.views = views;
            this.containerSelf = document.getElementById(this.uid);
            this.containerAnchor = this.containerSelf.querySelectorAll('a[href="#"]');
            this.controlAnchor = new incident_1.Incident(this.containerAnchor);
            this.containerForm = this.containerSelf.querySelector('form#contact_form');
            this.containerSubmit = this.containerForm.querySelector('button[type="submit"]');
            this.controlSubmit = new incident_1.Incident(this.containerSubmit);
            this.containerMessage = this.containerForm.querySelector('.feedback');
            this.formDataValidate = new formdatavalidate_1.FormDataValidate();
            this.formDataMap = new formdatamap_1.FormDataMap(this.containerForm);
        }
        onValidationError(fieldname, valid, message) {
            let fieldWrapperName = this.uid + '_' + fieldname;
            let fieldWrapper = this.containerForm.querySelector('#' + fieldWrapperName + ' .error');
            if (!valid) {
                vision_1.Vision.show(fieldWrapper);
                style_1.Style.addClass(fieldWrapper, 'danger');
                fieldWrapper.innerHTML = message;
            }
            else {
                vision_1.Vision.hide(fieldWrapper);
                fieldWrapper.innerHTML = '';
            }
        }
        onSubmit(e) {
            e.preventDefault();
            let values = this.formDataMap.generate();
            console.log('Contact.onSubmit:', values);
            style_1.Style.removeClass(this.containerMessage, 'success danger');
            if (this.formDataValidate.isValid(values)) {
                this.containerMessage.innerHTML = this.i18n.status.success;
                style_1.Style.addClass(this.containerMessage, 'success');
            }
            else {
                this.containerMessage.innerHTML = this.i18n.status.failure;
                style_1.Style.addClass(this.containerMessage, 'danger');
            }
            vision_1.Vision.show(this.containerMessage);
        }
        changeView(e) {
            let link = anchor_1.Anchor.handleAnchor(e);
            if (!!link) {
                this.views.activate(link);
            }
        }
        destroy() {
            console.log('modules.Contact.destroy');
            this.controlAnchor.off('click');
            this.controlSubmit.off('click');
        }
        initialize() {
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
    exports.Contact = Contact;
});
//# sourceMappingURL=contact.js.map