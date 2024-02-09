import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import handleDuplicateTimeslot from '@salesforce/apex/appointmentController.checkAvailability';

export default class AppointmentForm extends LightningElement {

    @track error;
    @track appointmentDate;
    @track customFormModal = false;

     handleSuccess()
    {
        const evt=new ShowToastEvent({
            title: 'Appointment Added Successfully',
            message: 'Appointment Submited',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
    handleClick() {
        handleDuplicateTimeslot()
            .then(result => {
                console.log('Success', result);
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: 'The time slot is already Appointed',
                        variant: 'error'
                    })
                );
            })
            .catch(error => {
               console.log(error); // Handle error
            });
    }


   

}
