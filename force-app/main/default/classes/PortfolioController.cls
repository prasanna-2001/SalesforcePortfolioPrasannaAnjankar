public with sharing class PortfolioController {
    @AuraEnabled(cacheable=true)
    public static string getSkills(){
        String finalSkills;
        List<SkillWrapper> skillwrapperList = new List<SkillWrapper>();
        try {
            List<PrasannaAnjankarPortfolioSkills__mdt> skills = [Select Id,Label, Category__c,Skills__c,Order__c from PrasannaAnjankarPortfolioSkills__mdt ORDER BY Order__c ASC];
            for(PrasannaAnjankarPortfolioSkills__mdt skill : skills){
                SkillWrapper sw = new SkillWrapper();
                sw.category = skill.Category__c;
                sw.skills = skill.Skills__c.split(',');
                sw.id=skill.Id;
                skillwrapperList.add(sw);
            }
            finalSkills = JSON.serialize(skillwrapperList);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        System.debug('Skill' + finalSkills);
        return finalSkills;
    }
    @AuraEnabled(cacheable=true)
    public static string getProjects(){
        String finalProjects;
        List<ProjectWrapper> projectwrapperList = new List<ProjectWrapper>();
        try {
           List<PrasannaAnjankarPortfolioProjects__mdt> projects = [Select Id, Project_Name__c,Project_Description__c,Skills__c,Order__c from PrasannaAnjankarPortfolioProjects__mdt ORDER BY Order__c ASC];
           for(PrasannaAnjankarPortfolioProjects__mdt project : projects){
                ProjectWrapper ps = new ProjectWrapper();
                ps.projectDescription = project.Project_Description__c;
                ps.skills = project.Skills__c.split(',');
                ps.id=project.Id;
                ps.projectName=project.Project_Name__c;
                projectwrapperList.add(ps);
            }
           finalProjects = JSON.serialize(projectwrapperList);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        System.debug('PROJECTS' + finalProjects);
        return finalProjects;
    }
    @AuraEnabled(cacheable=true)
    public static string getExperience(){
        String finalExperience;
        List<ExperienceWrapper> experienceWrapperList = new List<ExperienceWrapper>();
        try {
           List<PrasannaAnjankarPortfolioExperience__mdt> experiences = [Select Id,Company__c,Domain__c,Position__c,Skills__c,Tenure__c,Job_Description__c,Order__c from PrasannaAnjankarPortfolioExperience__mdt ORDER BY Order__c ASC];
           for(PrasannaAnjankarPortfolioExperience__mdt exp : experiences){
                ExperienceWrapper ex = new ExperienceWrapper();
                ex.company = exp.Company__c;
                ex.domain = exp.Domain__c;
                ex.position=exp.Position__c;
                ex.tenure=exp.Tenure__c;
                ex.skills=exp.Skills__c.split(',');
                ex.id=exp.Id;
                ex.jobDescription=exp.Job_Description__c.split(' && ');
                System.debug('exp '  + ex.jobDescription);
                experienceWrapperList.add(ex);
            }
           finalExperience = JSON.serialize(experienceWrapperList);
        } catch (Exception e) {
        }
        System.debug('PROJECTS' + finalExperience);
        return finalExperience;
    }

    @AuraEnabled(cacheable=true)
    public static string getCertificates(){
        String finalcertificates;
        List<CertificateWrapper> certificareWrapperList = new List<CertificateWrapper>();
        try {
           List<PrasannaAnjankarPortfolioCertificates__mdt> certificates = [Select Id,MasterLabel,CertId__c,Link__c,Skillls__c,Order__c from PrasannaAnjankarPortfolioCertificates__mdt ORDER BY Order__c ASC];
           for(PrasannaAnjankarPortfolioCertificates__mdt cert : certificates){
                CertificateWrapper c = new CertificateWrapper();
                c.name = cert.MasterLabel;
                c.link = cert.Link__c;
                c.id=cert.Id;
                c.certId=cert.CertId__c;
                c.skills=cert.Skillls__c.split(',');
                // System.debug('exp '  + c.jobDescription);
                certificareWrapperList.add(c);
            }
           finalcertificates = JSON.serialize(certificareWrapperList);
        } catch (Exception e) {
        }
        System.debug('cert' + finalcertificates);
        return finalcertificates;
    }
    public class CertificateWrapper{
        @AuraEnabled public String name;
        @AuraEnabled public String certId;
        @AuraEnabled public String id;
        @AuraEnabled public String link;
        @AuraEnabled public List<String> skills;
    }
    public class ExperienceWrapper{
        @AuraEnabled public String company;
        @AuraEnabled public String domain;
        @AuraEnabled public String position;
        @AuraEnabled public String tenure;
        @AuraEnabled public List<String> skills;
        @AuraEnabled public List<String> jobDescription;
        @AuraEnabled public String id;
    }
    public class SkillWrapper{
        @AuraEnabled public String category;
        @AuraEnabled public List<String> skills;
        @AuraEnabled public String id;
    }
    public class ProjectWrapper{
        @AuraEnabled public String projectDescription;
        @AuraEnabled public List<String> skills;
        @AuraEnabled public String id;
        @AuraEnabled public String projectName;
    }


    //Email Code
    @AuraEnabled
    public static String createContact(String lastName, String email, String description,String message) {
        try {
            String accId = null;
            Contact newContact = new Contact();
            newContact.LastName = lastName;
            newContact.Email = email;
            String selfMail = description +' : ' + message;
            newContact.Description = selfMail;
            newContact.RecordTypeId=Schema.SObjectType.Contact.getRecordTypeInfosByDeveloperName().get('Portfolio_Clients').getRecordTypeId();
            insert newContact;
            sendEmail(email,lastName,selfMail);
            sendEmailToRecipient(email,lastName); 
            return 'Success';
        } catch (Exception e) {
            return 'Error: ' + e.getMessage();
        }
    }

    @AuraEnabled
    public static void sendEmail(String toAddress, String subject, String body) {
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(new List<String>{ 'prasannaanjankar21@gmail.com' });
        mail.setSubject(subject + ' ' + toAddress);
        mail.setHtmlBody(body);
        Messaging.sendEmail(new List<Messaging.Email> { mail });
    }

    @AuraEnabled
    public static void sendEmailToRecipient(String toAddress, String lastName) {
        System.debug('TO ADRESS '+ toAddress  + ' ln ' + lastName);
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(new List<String>{ toAddress });
        mail.setSubject('Thank You for Contacting Me');
        String body = 'Dear ' + lastName +',\n\n';
        body += 'Thank you for reaching out to me through my portfolio. I\'m grateful for your interest and excited about the possibility of working together. Let\'s discuss further details at your convenience.\n\n';
        body += 'Best regards,\n\n';
        body += 'Prasanna Anjankar';
        mail.setPlainTextBody(body);
        StaticResource resumeResource = [SELECT Body FROM StaticResource WHERE Name = 'PortfilioResume' LIMIT 1];
        Blob resumeBlob = resumeResource.Body;
        Messaging.EmailFileAttachment attachment = new Messaging.EmailFileAttachment();
        attachment.setFileName('Prasanna_Anjankar_SF_Resume.pdf');
        attachment.setBody(resumeBlob);
        attachment.setContentType('application/pdf');
        mail.setFileAttachments(new Messaging.EmailFileAttachment[] { attachment });
        Messaging.sendEmail(new List<Messaging.Email> { mail });
    }
}