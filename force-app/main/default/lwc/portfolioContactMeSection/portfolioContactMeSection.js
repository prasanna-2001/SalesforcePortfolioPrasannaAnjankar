import { LightningElement, track } from 'lwc';
import createContact from '@salesforce/apex/PortfolioController.createContact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class PortfolioContactMeSection extends LightningElement {
    @track name = '';
    @track email = '';
    @track message = '';
    @track description = 'Someon tried to connect  \n Messsage: ' + this.message;
    getName(event) {
        this.name = event.target.value;
    }

    onHandleName(ev) {
        try {
            console.log('set');
            this.name = ev.target.value;
        }
        catch (error) {
            console.log(JSON.stringify(error));
        }

    }
    onHandleEmail(ev) {
        this.email = ev.target.value;
    }
    onHandleMessage(ev) {
        this.message = ev.target.value;
    }
    handleSubmit(event) {
        const allInputs = this.template.querySelectorAll('lightning-input, lightning-textarea');
        if (![...allInputs].every(input => input.reportValidity() && input.checkValidity())) {
            return; // stop if any field invalid
        }
        createContact({
            lastName: this.name,
            email: this.email,
            description: this.description,
            message:this.message
        })
            .then(result => {
                if (result != 'Success') {
                    console.log('Error creating contact:', result);
                    this.dispatchEvent(new ShowToastEvent({
                        title: 'Error',
                        message: 'Something went Wrong!',
                        varient: 'error'
                    }));
                } else {
                    this.dispatchEvent(new ShowToastEvent({
                        title: 'Success',
                        message: 'Thank You for Connecting..',
                        varient: 'success'
                    }));
                    this.name = '';
                    this.email = '';
                    this.message = '';
                    console.log('Contact created:', result);
                }
            })
            .catch(error => {
                console.log('Error creating contact:', error);
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Error',
                    message: error,
                    varient: 'error'
                }));
            });
    }
}