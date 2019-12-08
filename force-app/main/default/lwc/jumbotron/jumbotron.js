import { LightningElement } from 'lwc';

export default class Jumbotron extends LightningElement {
    uniqueId = "xyz";
    heading = "Welcome to TrailheadDX";
    subheading = "Salesforce developer conference dedicated to clicks, code, and people who create";
    description = "TrailheaDX is the must-attend conference of the year for everyone who wants to learn about building on the Salesforce Platform. Get hands-on and learn from Salesforce engineers, product leaders, and the Trailblazer Community. Meet other makers, learn about the latest updates, and blaze your trail.";
    action = "Visit Website";

    actionClickHandler(){
        var win = window.open("https://www.salesforce.com/in/trailheadx/", '_blank');
        win.focus();
    }
}