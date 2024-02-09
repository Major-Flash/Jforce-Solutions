public class AppointmentTriggerHandler {
     public static void handleDuplicateTimeslot(List<Appointment_Details__c> newAppointments) {
        Set<DateTime> isTime = new Set<DateTime>();
        for (Appointment_Details__c appointment : newAppointments) {
            isTime.add(appointment.Appointment_Time__c);
        }
        
        Map<DateTime, Integer> duplicateTimeslots = new Map<DateTime, Integer>();
        for (Appointment_Details__c existingAppointment : [SELECT Appointment_Time__c FROM Appointment_Details__c WHERE Appointment_Time__c IN :isTime]) {
            duplicateTimeslots.put(existingAppointment.Appointment_Time__c, 1);
        }

        for (Appointment_Details__c newAppointment : newAppointments) {
            if (duplicateTimeslots.containsKey(newAppointment.Appointment_Time__c)) {
                newAppointment.addError('Time slot is already appointed.');
            }
        }
    }

}