import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';


export default class ClientComponent extends NavigationMixin(LightningElement) {
    clientId;
    redirect = true;


    handleSuccess(event){
        event.preventDefault();
        this.clientId= event.detail.id;
        const evt= new ShowToastEvent({
            title: 'Success',
            message:'Client Created Successfully',
            variant:'success'
        });
            this.dispatchEvent(evt);
            if(this.redirect == true){
                this[NavigationMixin.Nacigate]({
                    type : 'Standard__recordPage',
                    attributes : {
                        recordId : this.clientId,
                        objectApiName : 'Client__c',
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