import { LightningElement, api } from 'lwc';

export default class Jumbotron extends LightningElement {
    @api uniqueId;
    @api heading;
    @api subheading;
    @api description;
    @api action;

    actionClickHandler(){
        var win = window.open("https://www.salesforce.com/in/trailheadx/", '_blank');
        win.focus();
    }
}