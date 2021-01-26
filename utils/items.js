
///
///
//
// EN ESTA SECCION PUSE TODOS LOS RECURSO CONSUMIBLES
// PARA EL FRONT QUE BIEN PUEDEN VENIR DE AQUI 
// O DE UNA API



export const facebookLink = 'http://www.facebook.com'
export const twitterLink = 'http://www.twitter.com'
export const linkedinLink = 'http://www.linkedin.com'


const pathIcons = '/assets/img/icons'
const pathLogos = '/assets/img/clients'



export const featuresItems = [
    {
        icon:`${pathIcons}/responsive-64.png`,
        title:'Responsive <mark>Layout Template</mark>',
        text:'Responsive code that makes your landing page look good on all devices (desktops, tablets, and phones). Created with mobile specialists.'
    },{
        icon:`${pathIcons}/desktop-chart-64.png`,
        title:'<mark>SaaS Landing Page</mark> Analysis',
        text:'A perfect structure created after we analized trends in SaaS landing page designs.</br> Analysis made to the most popular SaaS business.'
    },{
        icon:`${pathIcons}/browser-64.png`,
        title:'<mark>Smart</mark> BEM <mark>Grid</mark>',
        text:'Blocks, Elements and Modifiers. A smart HTML/CSS structure that can easely be reused. Layoutdriven by the purpose of modularity'
    },{
        icon:`${pathIcons}/desktop-windows-64.png`,
        title:'<mark>Multiple</mark> Unique <mark>Designs</mark>',
        text:'Choose between multiple unique designs and easy integrate elements from one design to another. Following the latest design trends.'
    },{
        icon:`${pathIcons}/customizer-64.png`,
        title:'Flexible <mark>HTML Sections</mark>',
        text:'Simple and Smart HTML code that works reintegrated in any part of the layout. Reuse the elements from one design to another.'
    },{
        icon:`${pathIcons}/users-64.png`,
        title:'<mark>User</mark> Friendly',
        text:'Easy to navigate. Made with user experience in mind, in order to provide the perfect landing page experience for your client.'
    }
]


export const logosItems = [
    {
        logo:`${pathLogos}/clients-logo1.png`,
    },
    {
        logo:`${pathLogos}/clients-logo2.png`,
    },
    {
        logo:`${pathLogos}/clients-logo3.png`,
    },
    {
        logo:`${pathLogos}/clients-logo4.png`,
    },
    {
        logo:`${pathLogos}/clients-logo5.png`,
    }
]


export const cardsItems = [
    {
        icon:`${pathIcons}/support-64.png`,
        title:'Help & Support',
        text:'Our 24/7 support team is here to help you and make sure our product is up to date.',
        email:'support@supportemail.com'
    },
    {
        icon:`${pathIcons}/globe-64.png`,
        title:'Media & Press',
        text:'Online awards and publications.<br/> Get out media resources and learn about out company.',
        email:'media@youremail.com'
    },
    {
        icon:`${pathIcons}/wallet-64.png`,
        title:'Sales',
        text:'Online awards and publications.<br/> Get out media resources and learn about out company.',
        email:'sales@salesemail.com'
    },
] 


export const itemsDropDown = [
    {
        title:"Installing the app on all devices",
        texto:'Guide to setup and configuration. You can present below a guide and a description of how your system configuration works and add some animated screens. We believe we have created the most efficent SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS business.'
    },
    {
        title:"How to implement and manage API key",
        texto:'Guide to setup and configuration. You can present below a guide and a description of how your system configuration works and add some animated screens. We believe we have created the most efficent SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS business.'
    },{
        title:'How to set up and optimize your account',
        texto:'Guide to setup and configuration. You can present below a guide and a description of how your system configuration works and add some animated screens. We believe we have created the most efficent SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS business.'
    },{
        title:'Manage your account access and security settings',
        texto:'Guide to setup and configuration. You can present below a guide and a description of how your system configuration works and add some animated screens. We believe we have created the most efficent SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS business.'
    },{
        title:'API integration basic overview',
        texto:'Guide to setup and configuration. You can present below a guide and a description of how your system configuration works and add some animated screens. We believe we have created the most efficent SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS business.'
    },{
        title:'Deactivating or deleting your account',
        texto:'Guide to setup and configuration. You can present below a guide and a description of how your system configuration works and add some animated screens. We believe we have created the most efficent SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS business.'
    }
]



export const itemsPrices = [
    {
        title:'FREE',
        price:0,
        popular:false,
        list:[
            {listItem:<li><mark>1</mark> User Account</li>, disabled:false},
            {listItem:<li><mark>10</mark> Team Members</li>, disabled:false},
            {listItem:<li><mark>Unlimited</mark> Emails Accounts</li>, disabled:false},
            {listItem:<li>Set and Manage Permissions</li>, disabled:false},
            {listItem:<li>API & extensions support</li>, disabled:true},
            {listItem:<li>Developer support</li>, disabled:true},
            {listItem:<li>A / B Testing</li>, disabled:true},
        ]
    },
    {
        title:'STARTUP',
        price:29,
        popular:false,
        list:[
            {listItem:<li><mark>50</mark> User Account</li>, disabled:false},
            {listItem:<li><mark>100</mark> Team Members</li>, disabled:false},
            {listItem:<li><mark>Unlimited</mark> Emails Accounts</li>, disabled:false},
            {listItem:<li>Set and Manage Permissions</li>, disabled:false},
            {listItem:<li>API & extensions support</li>, disabled:false},
            {listItem:<li>Developer support</li>, disabled:true},
            {listItem:<li>A / B Testing'</li>, disabled:true},
        ]
    },
    {
        title:'PRO',
        price:49,
        popular:true,
        list:[
            {listItem:<li><mark>50</mark> User Account</li>, disabled:false},
            {listItem:<li><mark>500</mark> Team Members</li>, disabled:false},
            {listItem:<li><mark>Unlimited</mark> Emails Accounts</li>, disabled:false},
            {listItem:<li>Set and Manage Permissions</li>, disabled:false},
            {listItem:<li>API & extensions support</li>, disabled:false},
            {listItem:<li>Developer support</li>, disabled:false},
            {listItem:<li>A / B Testing</li>, disabled:true},
        ]
    },
    {
        title:'ULTRA',
        price:99,
        popular:false,
        list:[
            {listItem:<li><mark>Unlimited</mark> User Account</li>, disabled:false},
            {listItem:<li><mark>Unlimited</mark> Team Members</li>, disabled:false},
            {listItem:<li><mark>Unlimited</mark> Emails Accounts</li>, disabled:false},
            {listItem:<li>Set and Manage Permissions</li>, disabled:false},
            {listItem:<li>API & extensions support</li>, disabled:false},
            {listItem:<li>Developer support</li>, disabled:false},
            {listItem:<li>A / B Testing</li>, disabled:false},
        ]
    },
]