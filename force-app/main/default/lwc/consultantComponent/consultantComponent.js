import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class ConsultantComponent extends NavigationMixin(LightningElement) {
    @api consultantId;
    redirect = true;

    handleChange(event){
        let targetId = event.target.value;
        console.log('targetId :'+targetId);

        const evt = new ShowToastEvent({
            title : 'Data Loaded',
            message :'Lookup Data Loading Successfully',
            variant :'success'
        });
            this.dispatchEvent(evt);
    }

    handleSuccess(event){
        event.preventDefault();
        this.consultantId= event.detail.id;
        const evt= new ShowToastEvent({
            title: 'Success',
            message:'Consultant Record Created Successfully',
            variant:'success'
        });
        this.dispatchEvent(evt);
        if(this.redirect == true ){
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes : {
                    recordId : this.consultantId,
                    objectApiName : 'Consultant__c',
                    actionName : 'view'
                },
            });

        }


    }


    handleBack(){
        let cmpDef = {
            componentDef: "c:displayMultipleFields"
        };
        let encodedDef = btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
        type: "standard__recordPage",
        attributes : {URL: "/one/one.app#" +encodedDef}
        });


    }
    
}