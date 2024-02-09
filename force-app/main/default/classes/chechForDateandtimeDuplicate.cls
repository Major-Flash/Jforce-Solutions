public with sharing class chechForDateandtimeDuplicate {
    @AuraEnabled
    public static Boolean isTimeExists(String fieldValue){

        Datetime fieldValueDateTime;
        try {
            // Convert the string fieldValue to a Datetime
            fieldValueDateTime = Datetime.valueOf(fieldValue);
        } catch (Exception e) {
            // Handle invalid datetime format
            return false;
        }



        list<Appointment_Details__c> existingRecord = [SELECT Id, Appointment_Date__c, Appointment_Time__c FROM Appointment_Details__c WHERE Appointment_Time__c =:fieldValueDateTime  LIMIT 1];
    
        return !existingRecord.isEmpty();
    }
}