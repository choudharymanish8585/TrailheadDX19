import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/TrailheaddxController.getAccounts';
import getOpportunities from '@salesforce/apex/TrailheaddxController.getOpportunities';
import { NavigationMixin } from 'lightning/navigation';

export default class JumbotronParent1 extends NavigationMixin(LightningElement) {
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

    accountActionHandler(event){
        const accId = event.detail;
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: accId,
                objectApiName: 'Account', // objectApiName is optional
                actionName: 'view'
            }
        });
    }

    opportunityActionHandler(event){
        const oppId = event.detail;
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: oppId,
                objectApiName: 'Opportunity', // objectApiName is optional
                actionName: 'edit'
            }
        });
    }

}