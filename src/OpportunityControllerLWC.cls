public with sharing class OpportunityControllerLWC {

        @AuraEnabled(cacheable=true)
        public static List<Opportunity> getListOpportunity(){
            return [SELECT Id, Name, Amount, CloseDate, StageName, CreatedDate, DataCriacao__c FROM Opportunity WHERE StageName = 'Negotiation/Review' ORDER BY CreatedDate desc LIMIT 5];
        }

}
