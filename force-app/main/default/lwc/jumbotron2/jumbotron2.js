import { LightningElement, api } from 'lwc';

export default class Jumbotron extends LightningElement {
    @api uniqueId;
    @api heading;
    @api subheading;
    @api description;
    @api action;

    actionClickHandler(){
        const actionEvt = new CustomEvent("action", {detail:this.uniqueId});
        this.dispatchEvent(actionEvt);
    }
}