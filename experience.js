const experienceArray = [
    {
      "designation": "Azure & Full Stack Consultant",
      "tenure" : "Oct 2020 - Oct 2023",
      "organisation": "Deloitte USI",
      "projects": [
        {
          "title": "Digital Transformation of Luxury Car Manufacturer ",
          "descriptions": [
            "Participated in RFPs, pilot architecture of Supply chain Transformation of Manufacturing the cars based upon future stock details using Azure Modernizations system designs(mostly Event Driven Patterns) .",
            "Handled & mentored a small team of 4 members for 4 microservice",
            "Implemented Micro-frontEnd By using Module Federation ,created Translations by using Ngx-Translate and used Redux for State management by using NgRx",
            "Led developing 15 major pages in Angular 12 ,Generic ControlTable Structures,Charts and patterns and animated interactions to optimize User Experience",
            "implemented Devops Pipeline in Azure Devops for UI"
          ]
        },
        {
          "title": " Multi cloud Integration Application",
          "descriptions": [
            "Developed integration pipelines by using Azure Data Factory",
            "Created Durable Azure function(fan-out-fan-in pattern) which saves 30 % Production cost as well as increase performance",
            "Developed POCs for multi container application using Docker & k8s",
            "Designed .NET core multi container web API from scratch",
            "Implemented DevOps pipeline for couple of .NET Core applications",
            "Exposed web APIs in Azure APIM and overwrite policies as per the Clients requirement"

          ]
        },
        {
          "title": "Payments and Billing Solution Architecture design",
          "descriptions": [
            "Handled direct client interaction on approval of solution design",
            "Developed messaging integration system using Azure service Bus Created Technical docs with respect to serverless systems as per the organisation standard by interacting with Product owners",
            "Involved in requirement gatherings from Business documents",
            "Developed Module based integration and Solution architecture design by various Azure native Services Using Visio"

          ]
        }
      ]
    },
    {
      "designation": "Full Stack Developer",
      "tenure": "Sept 2019 - Sept 2020",
      "organisation": "Mindfire Solution",
      "projects": [
        {
          "title": "Digital Transformation of Retail Client",
          "descriptions": [
            "Designed and developed responsive web layouts using bootstrap flex box as per requirements",
            "Developed reusable functional components in React JS",
            "Developed 55% of webapp by using React & Redux",
            "Implemented both synchronous and field type form validations using Redux Forms",
            "Developed 90% of Authentication server by using .NET Core web API and IdentityUser",
            "Implemented email messaging system using Azure function which decrease 20% of production cost",
            "Designed Libraries by Factory methods in .NETcore webAPI (C#)",
            "Deployed apps in Azure Web apps"
          ]
        }
      ]
    },
    {
      "designation": "Azure (PaaS) Developer",
      "tenure": "Aug 2018 - Aug 2019",
      "organisation": "Accenture",
      "projects": [
        {
          "title": "Exam Awarding Cloud Applications",
          "descriptions": [
            "Applied Agile methodology and SOLID principles",
            "Responsible for creating responsive UI page layouts",
            "Implemented Angular Router to enable navigation from one view to the next as customer performs application tasks",
            "Created HTTP requests using RxJS Observable",
            "Developed Azure functions which triggered by ServiceBus Queue to interact with Azure Blob storage for Automatic PDF generation"
          ]
        }
      ]
    }
] ;

const experienceContainer = document.querySelector('.experienceContainer') ;
const experienceCards = experienceContainer.querySelector('.experienceCards') ;

let createProject = (project)=>{
    let descriptions = '' ;

    project.descriptions.forEach(description=>{
        descriptions = descriptions + `<li>${description}</li>` ;
    }) ;
    return `<div class="item__project mt-s mb-s">
                            <h5 class="item__project__title">${project.title}</h5>
                            <ul class="item__project__description">
                                    ${descriptions}
                            </ul>    
                        </div>`
}


let createCard= (exp,index) =>{

    let projectHTML = "" ;

    exp.projects.forEach(project =>{
        projectHTML = projectHTML + createProject(project) ;
    })

    return `<li class="item item--${index+1}">
                    <div class="item__tenure">
                        <div class="item__tenure__bullet-point ">
                            <div class="item__tenure__bullet-point-tag tag tag--left"></div>
                        </div>
                    </div>
                    <div class="item__border-left-line"></div>
                    <h3 class="item__designation">${exp.designation}</h3>
                    <div class="item__organisationContainer">
                        <h4 class="item__organisation">${exp.organisation}</h4>
                        <h4 class="item__organisation__tenure">${exp.tenure}</h4>
                        ${projectHTML}
                    </div>
                </li>`;
}


experienceArray.forEach((exp,index) =>{
    let cardList = createCard(exp,index) ;
    experienceCards.insertAdjacentHTML("beforeend",cardList);

    const currentItemCard = experienceCards.querySelector(`.item--${index+1}`) ;

    const tenureTag = currentItemCard.querySelector(".item__tenure__bullet-point-tag") ;
    console.log("tenureCard->>>>>",tenureTag) ;
    tenureTag.setAttribute("data-tenure",exp.tenure) ;
});