import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import checkAvailability from '@salesforce/apex/appointmentController.checkAvailability'

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

    customShowModalPopup(){
        this.customFormModal=true;

    }
    customHideModalPopup(){
        this.customFormModal=false;
    }

}
