import { LightningElement, wire } from 'lwc';
import  getListOpportunity  from '@salesforce/apex/OpportunityControllerLWC.getListOpportunity';

export default class UltimasOpportunities extends LightningElement {
   opportunities;
   error;

    columns =[
        {label:'ID', fieldName: 'Id'},
        {label:'Nome', fieldName: 'Name'},
        {label: 'Valor', fieldName: 'Amount'},
        {label: 'Fase', fieldName: 'StageName'},
        {label: 'Data de criação', fieldName: 'DataCriacao__c'},
    ]

    @wire(getListOpportunity)wiredOpportunities({error, data}){
        if(data){
            this.opportunities = data;
            this.error = undefined;
            console.log(this.opportunity);
        } else if(error){
            this.error = error;
            this.opportunities = undefined;
        }
    }
}