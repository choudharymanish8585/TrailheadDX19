import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/TrailheaddxController.getAccounts';
import getOpportunities from '@salesforce/apex/TrailheaddxController.getOpportunities';


export default class JumbotronParent1 extends LightningElement {
    @track acc = {};
    @track opp = {};

    connectedCallback(){
        this.getAccountData();
        this.getOpportunityData();
    }

    getAccountData(){
        getAccounts().then( response =>{
            this.acc = response;
        });
    }

    getOpportunityData(){
        getOpportunities().then( response =>{
            this.opp = response;
        });
    }

}