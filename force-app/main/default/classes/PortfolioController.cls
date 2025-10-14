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

}