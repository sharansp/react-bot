util.ServiceConfig = {


    ENV: {

		//flag to indicate unified Shell
        isUnified: false,
        //flags for native app
		isNative: false,
        isAction:false,
		//UIApp version
		uiAppVersion:0,

		//Set this false if we use Packaged mode - iOS and Windows
        //Set to true when we deploy for Web

        isWeb:true,

        //Set the location here
        location: "US", //IN or US


        //use QOS port or not
        useQOS:false,

        //show the dasboard counters
        useDashboardCounters:false,



        //Don't manually edit the flags below, it'll be updated from Login Screen
        useDev:false,
        useQA: false,
        useUAT:false,
        usePrd:false,

        useSSO:false,
        useToken:false,
        useSANDBOX:false,


        //Don't change anything below
        //System Mappings

        DEV: {
            "hanadrp": "hanadrp",
            "hanadbi": "hanadbi",
            "hanadcs": "hanadcs",
            "hanadse": "hanadse",
            "hanabwd": "hanabwd",
            "hanadbi": "hanadbi",
            "hanadtr": "hanadtr",
            "hanadap": "hanadap",
            "hanadhr": "hanadhr",
            "hanadsu": "hanadsu",
            "hanadca": "hanadca",
            "hanadmg": "hanadmg",
            "dcsweb": "DCSWeb",
            "dcaweb": "DCAWeb",
            "bda": "BIDExp",
            "proxyKey": "devproxy",
            "gateway": "sapdgh",
            "gaId": "UA-93721017-3",
            "ecom": "ecomdeepapp",
            "B2B": "b2bdeepapp",
            "jcoConnector": "connector",
            "jcoVersion":"v1",
            "jcoPrefix":"D",
            "loginParam":"GWUserDefaultsSet('X')?sap-client=050",
            "loginService":"/sap/opu/odata/sap/ZGATEWAY_LOGIN_SRV",
            "biUrl":"/sap/opu/odata/sap/ZGATEWAY_LOGIN_SRV",
            "env": "denv",
            "ctiserverurl": { "US": ":44397", "IN": ":44397", "DE": ":44397" }
        },

        DEVSSO: {
            "hanadrp": "hanadrp",
            "hanadbi": "hanadbi",
            "hanadcs": "hanadcs",
            "hanadmg": "hanadmg",
            "dcsweb": "DCSWeb",
            "dcaweb": "DCAWeb",
            "bda": "BIDExp",
            "hanadse": "hanadse",
            "hanabwd": "hanabwd",
            "hanadbi": "hanadbi",
            "hanadtr": "hanadtr",
            "hanadap": "hanadap",
            "hanadhr": "hanadhr",
            "hanadsu": "hanadsu",
            "hanadca": "hanadca",
            "ecom": "ecomdeepapp",
            "gaId": "UA-93721017-3",
            "B2B": "b2bdeepapp",
            "proxyKey": "devSSOproxy",
            "gateway": "sapdgh",
            "jcoConnector": "connector",
            "jcoVersion": "v2",
            "jcoPrefix":"D",
            "loginParam":"GWUserDefaultsSet('X')?sap-client=050",
            "loginService":"/sap/opu/odata/sap/ZGATEWAY_LOGIN_SAML_SRV",
            "env": "denvssotoken",
            "ctiserverurl": { "US": ":44397", "IN": ":44397", "DE": ":44397" }
        },

        QA: {
            "hanadrp": "hanaqrp",
            "hanadbi": "hanaqbi",
            "hanadcs": "hanaqcs",
            "hanadse": "hanaqse",
            "hanabwd": "hanabwq",
            "hanadbi": "hanaqbi",
            "hanadtr": "hanaqtr",
            "hanadap": "hanaqap",
            "hanadhr": "hanaqhr",
            "hanadsu": "hanaqsu",
            "hanadca": "hanaqca",
            "hanadmg": "hanaqmg",
            "gaId": "UA-93721017-3",
            "proxyKey": "qaproxy",
            "gateway": "sapqgh",
            "ecom": "ecomdeepapp",
            "B2B": "b2bdeepapp",
            "jcoConnector": "connector",
            "jcoVersion": "v1",
            "jcoPrefix":"Q",
            "loginParam":"GWUserDefaultsSet('X')?sap-client=100",
            "loginService":"/sap/opu/odata/sap/ZGATEWAY_LOGIN_SRV",
            "env": "qenv",
            "ctiserverurl": { "US": ":44397", "IN": ":44397", "DE": ":44397" }
        },
        QASSO: {
            "hanadrp": "hanaqrp",
            "hanadbi": "hanaqbi",
            "hanadcs": "hanaqcs",
            "hanadse": "hanaqse",
            "hanabwd": "hanabwq",
            "hanadbi": "hanaqbi",
            "hanadtr": "hanaqtr",
            "hanadap": "hanaqap",
            "hanadhr": "hanaqhr",
            "hanadsu": "hanaqsu",
            "hanadmg": "hanaqmg",
            "gaId": "UA-93721017-3",
            "hanadca": "hanaqca",
            "proxyKey": "qaSSOproxy",
            "gateway": "sapqgh",
            "ecom": "ecomdeepapp",
            "B2B": "b2bdeepapp",
            "jcoConnector": "connector",
            "jcoVersion": "v2",
            "jcoPrefix":"Q",
            "loginParam":"GWUserDefaultsSet('X')?sap-client=100",
            "loginService":"/sap/opu/odata/sap/ZGATEWAY_LOGIN_SAML_SRV",
            "env": "qenvssotoken",
            "ctiserverurl": { "US": ":44397", "IN": ":44397", "DE": ":44397" }
        },
        SANDBOXSSO: {
            "hanadrp": "hanaxrp",
            "hanadbi": "hanaxbi",
            "hanadcs": "hanaxcs",
            "hanadse": "hanaxse",
            "hanadtr": "hanaxtr",
            "hanadap": "hanaxap",
            "hanadhr": "hanaxhr",
            "hanadsu": "hanaxsu",
            "hanadca": "hanaxca",
            "hanadmg": "hanaxmg",
            "ecom": "ecomprojapp",
            "B2B": "b2bprojapp",
            "proxyKey": "sandboxSSOproxy",
            "gateway": "sapxgh",
            "jcoConnector": "connector",
            "jcoVersion":"v2",
            "jcoPrefix":"X",
            "loginParam":"GWUserDefaultsSet('X')?sap-client=100",
            "loginService":"/sap/opu/odata/sap/ZGATEWAY_LOGIN_SAML_SRV",
            "env":"xenvssotoken",
            "ctiserverurl": { "US": ":44397", "IN": ":44397", "DE": ":44397" }
        },

        UATSSO: {
            "hanadrp": "hanaurp",
            "hanadbi": "hanaubi",
            "hanadcs": "hanaucs",
            "hanadse": "hanarse",
            "hanabwd": "hanabwu",
            "hanadbi": "hanaubi",
            "hanadtr": "hanautr",
            "hanadap": "hanauap",
            "hanadhr": "hanauhr",
            "gaId": "UA-93721017-3",
            "hanadsu": "hanausu",
            "hanadca": "hanauca",
            "hanadmg": "hanaumg",
            "proxyKey": "uatSSOproxy",
            "gateway": "sapugh",
            "jcoConnector": "connector",
            "jcoVersion":"v2",
            "jcoPrefix":"U",
            "loginParam":"GWUserDefaultsSet('X')?sap-client=100",
             "loginService":"/sap/opu/odata/sap/ZGATEWAY_LOGIN_SAML_SRV",
             "env": "uenvssotoken",
            "ecom": "ecomdeepapp",
            "B2B": "b2bdeepapp",
            "ctiserverurl": { "US": ":44397", "IN": ":44397", "DE": ":44397" }
        },

        PRDSSO: {
            "hanadrp": "hanaprp",
            "hanadbi": "hanapbi",
            "hanadcs": "hanapcs",
            "hanadse": "hanapse",
            "hanabwd": "hanabwp",
            "hanadbi": "hanapbi",
            "hanadtr": "hanaptr",
            "hanadap": "hanapap",
            "hanadhr": "hanaphr",
            "hanadsu": "hanapsu",
            "gaId": "UA-93721017-2",
            "hanadca": "hanapca",
            "hanadmg": "hanapmg",
            "proxyKey": "prdSSOproxy",
            "gateway": "sappgh",
            "jcoConnector": "connector",
            "jcoVersion": "v2",
            "jcoPrefix":"P",
            "loginParam":"GWUserDefaultsSet('X')?sap-client=100" ,
            "loginService":"/sap/opu/odata/sap/ZGATEWAY_LOGIN_SAML_SRV",
            "env": "penvssotoken",
            "ecom": "ecomdeepapp",
            "B2B": "b2bdeepapp",
            "ctiserverurl": { "US": ":44397", "IN": ":44397", "DE": ":44397" }
        },


        //SSO

        PROXY: {
            IN: {
                devproxy: "sapbfw",
                qaproxy: "sapbfw"
            },
            US: {
                devproxy: "sapfw",
                devSSOproxy: "sapfw",
                qaproxy: "sapqweb",
                qaSSOproxy: "sapqweb",
                sandboxSSOproxy:"sapxweb",
                uatSSOproxy:"sapuweb",
                prdSSOproxy:"sappweb"
            }
        },
    },

    createODataModels: function () {
        //var qmopModel = new sap.ui.model.odata.ODataModel(this.getServiceURL("/sap/opu/odata/sap/YQM_INSPOPER_GETDETAIL_SRV"), true, username, password);
        sap.ui.getCore().setModel(true, "isModelLoaded");
    },

    createHanaModel: function (url, key, requestCompletedEvent, domain) {
        //Create hana models separately for Silji's demo
        var hanaUserData = sap.ui.getCore().getModel("hanaUserData");
        var model = new sap.ui.model.odata.ODataModel(this.getHanaHostName(domain) + url, true, hanaUserData.username, hanaUserData.password);
        model.oHeaders["Content-Type"] = "application/json; charset=UTF-8";

        sap.ui.getCore().setModel(model, key);

        if (requestCompletedEvent != undefined && requestCompletedEvent != "") {
            model.attachRequestCompleted(function () {
                sap.ui.getCore().getEventBus().publish("app", requestCompletedEvent);
            });
        }
    },

    massageMetaData: function (metaData) {

        var properties = {};
        var propertiesArray = metaData.dataServices.schema[0].entityType[0].property;
        $.each(propertiesArray, function (i, property) {

            var key = property.name;
            var value = property.extensions[0].value;
            properties[key] = value;

        });

        return properties;

    },

    getServiceURL: function (url) {
        return this.getHostName() + url;
    },

    getHanaServiceURL: function (url) {
        return this.getHanaHostName() + url;
    },

    getMetaDataURL: function (url) {
        this.getServiceURL(url);
        return this.getServiceURL(url) + "/$metadata";
    },

    //Form Prefix URLs for BAPIs
    getHostName: function (username,password) {


       //Gateway in Quality with SSO - QGH
       //Gateway in Quality - sapqgh
       //Gateway in Dev - sapdgh

        var proxy = this.getProxy();
        var server = this.getEnvironment()["gateway"];
        var sso = this.ENV.useSSO;
        return (sso ? "https://" : "http://") + proxy + this.getServer() + server;


    },

    getEnvironment:function() {
        var sso=this.ENV.useSSO;
        var qa=this.ENV.useQA;
        var uat = this.ENV.useUAT;
        var sbx = this.ENV.useSANDBOX;
        var prod = this.ENV.usePrd;
        var token = this.ENV.useToken;



        //Production

        if (prod) {
            return this.ENV.PRDSSO;
        }
        else if (uat) {
            return this.ENV.UATSSO;
        }
        else if (sbx) {
            return this.ENV.SANDBOXSSO;
        }

        else if (sso && token) {
            return qa? this.ENV.QASSO : this.ENV.DEVSSO;
        }
        else
            return qa? this.ENV.QA : this.ENV.DEV;
    },


    //Form prefix URLs for HANA
    getHanaHostName: function (d) {




        //Hana in Quality with SSO - QRP, QSE, etc - go through sapdwd
        //Hana in Quality - qrp,qse - go through sapfw
        //Hana in Dev with SSO - DRP, DSE - go through sapdwd
        //Hana in Dev - hanadrp, hanadse - go through sapfw

        var domain = d || "hanadrp";


        //Sri: for inboxes binded with gateway service
        if(domain.indexOf('sap')>-1){
            return this.getHostName();
        }


        var server = this.getEnvironment()[domain];
        var sso = this.ENV.useSSO;
        return (sso ? "https://" : "http://") + this.getProxy() + this.getServer() + server;
    },

    getProxy:function() {

        var loc = this.ENV.location;
        var proxyKey = this.getEnvironment()["proxyKey"];
        return this.ENV.PROXY[loc][proxyKey];

    },

    //Form Prefix URLs for JCO
    getJcoRfcUrl:function(domain)
    {

        //JCO in Quality with SSO - CON | QRP, QSE etc - go through sapdwd
        //JCO in Quality - connector | QRP, QSE etc - go through sapfw
        //JCO in Dev - connector | DRP, DSE etc - go through sapfw


        var e = this.getEnvironment()["jcoPrefix"];

        domain=e + domain.slice(-2); //Append D, Q, U, P to convert D** to x** (DCS to QCS etc)
        //LSSN-36737 Change U* System to RSC
         if(domain.toLowerCase()=="use"){
           domain="RSE";
          }


        var proxy = this.getProxy();
        var connector = this.getEnvironment()["jcoConnector"];
        var version = this.getEnvironment()["jcoVersion"];
        var sso = this.ENV.useSSO;


        return (sso ? "https://" : "http://") + proxy + this.getServer() + connector + "/jco-odata-adapter/odata/" + version + "/rfc/" + domain;
    },

    getJcoUrl:function(domain)
    {

        //JCO in Quality with SSO - CON | QRP, QSE etc - go through sapdwd
        //JCO in Quality - connector | QRP, QSE etc - go through sapfw
        //JCO in Dev - connector | DRP, DSE etc - go through sapfw


        var e = this.getEnvironment()["jcoPrefix"];

        domain=e + domain.slice(-2); //Append D, Q, U, P to convert D** to x** (DCS to QCS etc)

        var proxy = this.getProxy();
        var connector = this.getEnvironment()["jcoConnector"];
        var sso = this.ENV.useSSO;


        return (sso ? "https://" : "http://") + proxy + this.getServer() + connector + "/jco-odata-adapter/odata/";
    },

    getServer: function () {

        if (this.ENV.useQOS && this.ENV.useSSO) {
            return ".sial.com:4443/";
        }

        return ".sial.com/";

    },

    getBapiMetadata: function (domain, bapiName) {


        switch (domain) {
            case "DCS":
                domain = util.CrmConfig.domain.bapicrm;
            default:

        }

        return this.getJcoRfcUrl(domain) + "/rfcmetadata/" + bapiName;
    },

    getBapiPostUrl: function (domain, bapiName) {

        switch (domain) {
            case "DCS":
                domain = util.CrmConfig.domain.bapicrm;
            default:

        }
        return this.getJcoRfcUrl(domain) +  "/adapter/" + bapiName;
    },

     getSaviyntURLForEnv: function(env){
        var url="";
        switch(env){
            case  this.ENV.DEVSSO.env: url= "https://sapfw.sial.com:44395/ECM";
            break;

            case this.ENV.QASSO.env: url= "https://sapqweb.sial.com:44395/ECM";
            break;

            case this.ENV.UATSSO.env: url= "https://sapqweb.sial.com:44395/ECM";
            break;

            case this.ENV.PRDSSO.env: url= "https://sappweb.sial.com:44395/ECM";
            break;

        }
        return url;
    },
    getHybrisURLForENV: function(env){
        var url="";
        switch(env){
            case  this.ENV.DEVSSO.env: url= "https://sapdhyw.sial.com/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html";
                break;

            case this.ENV.QASSO.env: url= "https://sapqhyw.sial.com/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html";
                break;

            case this.ENV.UATSSO.env: url= "https://sapuhyw.sial.com/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html";
                break;

            case this.ENV.PRDSSO.env: url= "https://sapphyw.sial.com/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html";
                break;

        }
        return url;
    },
    getB2BURLForENV: function (env) {
        var url = "";
        switch (env) {
            case this.ENV.DEVSSO.env: url = "http://sapdes.sial.com:50000/RESTAdapter";
                break;

            case this.ENV.UATSSO.env: url = "http://sapqesw.sial.com:50000/RESTAdapter";
                break;
                
            case this.ENV.PRDSSO.env: url = "http://sappesw.sial.com:50000/RESTAdapter";
                break;
            
            default:
                break;
        }
        return url;
    },

    getCtiServer: function(countryShortCode) {
        var domain = this.getServer();
        // remove the last slash and port number, if any
        domain = domain.replace(/\/+$/, '').replace(/:[0-9]*$/, '');
        var ctiServers = this.getEnvironment()['ctiserverurl'];
        var ctiServer = ctiServers[countryShortCode];
        if (!ctiServer) { ctiServer = ctiServers['US']; }
        var sso = this.ENV.useSSO;

        return (sso ? "https://" : "http://") + this.getProxy() + domain + ctiServer;
    },

    hanacrm: util.CrmConfig.domain.hanacrm,
    hanadse: "hanadse",
    hanadcs: "hanadcs",
    hanadrp: "hanadrp",
    mailNotificationEnabled: false,
    autoRefreshEnabled: false

};