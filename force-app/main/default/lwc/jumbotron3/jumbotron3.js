/* eslint-disable @lwc/lwc/no-async-operation */
import { LightningElement, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Jumbotron extends LightningElement {
    @api uniqueId;
    @api heading;
    @api subheading;
    @api description;
    @api action;

    @track showSpinner = false;

    actionClickHandler(){
        const actionEvt = new CustomEvent("action", {detail:this.uniqueId});
        this.dispatchEvent(actionEvt);
    }

    @api
    refresh(){
        this.showSpinner = true;
        setTimeout(() => {
            this.showSpinner = false;
            this.showNotification();
        }, 1000);
    }

    showNotification(){
        const evt = new ShowToastEvent({
            title: "Success",
            message: "Refresh complete",
            variant: "success",
        });
        this.dispatchEvent(evt);
    }
}