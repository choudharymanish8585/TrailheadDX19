import { LightningElement, api } from 'lwc';

export default class Jumbotron extends LightningElement {
    @api uniqueId = "xyz";
    @api heading = "Welcome to TrailheadDX";
    @api subheading = "Salesforce developer conference dedicated to clicks, code, and people who create";
    @api description = "TrailheaDX is the must-attend conference of the year for everyone who wants to learn about building on the Salesforce Platform. Get hands-on and learn from Salesforce engineers, product leaders, and the Trailblazer Community. Meet other makers, learn about the latest updates, and blaze your trail.";
    @api action = "Visit Website";

    actionClickHandler(){
        const actionEvt = new CustomEvent("action", {detail:this.uniqueId});
        this.dispatchEvent(actionEvt);
    }
}