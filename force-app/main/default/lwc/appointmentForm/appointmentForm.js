import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import checkAvailability from '@salesforce/apex/appointmentController.checkAvailability'

export default class AppointmentForm extends LightningElement {

    @track error;
    @track appointmentDate;

     handleSuccess()
    {
        const evt=new ShowToastEvent({
            title: 'Toast Success Message',
            message: 'Appointment Submited',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }

    
    handleCheckAvailability() {

        //isActive = true then it should throw msg as 
    }

}
