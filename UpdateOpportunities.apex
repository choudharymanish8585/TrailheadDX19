// Use the following to execute anonymous apex to update opportunity description

//run below command to execute this script
//>> sfdx force:apex:execute -f UpdateOpportunities.apex

List<Opportunity> opps = new List<Opportunity>();
for(Opportunity opp : [Select Id, Name, Description, Account.Description From Opportunity]){
				//process record here
    opp.Description = opp.Account.Description;
				opps.add(opp);
}
update opps;