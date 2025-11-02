# Live Link : 

[https://ycce109-dev-ed.my.site.com/PortfolioPrasannaAnjankar/s/](https://ycce109-dev-ed.my.site.com/PortfolioPrasannaAnjankar/s/)

# Add below css to fix the margins and paddings of the community sites : 
Builder--> Themes--->Edit CSS
```CSS
.comm-content-header{
    display:none ;
}
.comm-content-footer {
    display:none;
}
.contentRegion{
   margin: 0 ;
   padding: 0 !important;  
}
.siteforceContentArea {
   margin: 0 ;
   padding: 0 ;
}
.cCenterPanel{
  margin: 0 ;
    padding: 0;   
    width:100% ;
}

Now that you’ve created a Salesforce DX project, what’s next? Here are some documentation resources to get you started.

# Salesforce DX Project: Next Steps

Now that you’ve created a Salesforce DX project, what’s next? Here are some documentation resources to get you started.

## How Do You Plan to Deploy Your Changes?

Do you want to deploy a set of changes, or create a self-contained application? Choose a [development model](https://developer.salesforce.com/tools/vscode/en/user-guide/development-models).

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
