public with sharing class TrailheaddxController {
    @AuraEnabled(cacheable=true)
    public static Account getAccounts(){
        for(Account acc : [Select Id, Name, Description From Account LIMIT 10]){
            //process record here
            if(String.isNotEmpty(acc.Description)){
                return acc;
            }
        }
        return null;
    }


    @AuraEnabled(cacheable=true)
    public static Opportunity getOpportunities(){
        for(Opportunity opp : [Select Id, Name, Description From Opportunity LIMIT 10]){
            //process record here
            if(String.isNotEmpty(opp.Description)){
                return opp;
            }
        }
        return null;
    }
}
