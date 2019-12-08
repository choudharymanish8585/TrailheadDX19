import { LightningElement } from 'lwc';

export default class JumbotronParent1 extends LightningElement {
    
    refreshHandler(){
        this.template.querySelector('c-jumbotron3').refresh();
    }

    actionClickHandler(){
        var win = window.open("https://www.salesforce.com/in/trailheadx/", '_blank');
        win.focus();
    }

}