let recommendations = [
    {
      "First Name": "Swapnil",
      "Last Name": "Kushwaha",
      "Company": "Deloitte Consulting",
      "Job Title": "Senior Consultant",
      "Text": "I've worked with Anshuman as part of the same development team. He always had a good understanding of the user stories and requirements which I specified - and knew how to come up with technical solutions to meet those requirements. Anshuman was a supportive and appreciated colleague who contributed to a positive team spirit. If given I would welcome to work with him again.",
      "Creation Date": "08/30/23, 09:48 AM",
      "Status": "VISIBLE",
      "ProfileImg" :"https://media.licdn.com/dms/image/v2/D4D03AQFqgIr0rzSIFg/profile-displayphoto-shrink_100_100/B4DZQJohoSHMAU-/0/1735328406723?e=1743638400&v=beta&t=D9Oz1tx-izRYj0TP6x0cNHEB_Q_Ad6wwfIzlcIZkESM"
    },
    {
      "First Name": "Smruti Ranjan",
      "Last Name": "Mishra",
      "Company": "Deloitte",
      "Job Title": "Manager",
      "Text": "I had the pleasure of mentoring Anshuman when he joined my team. His attitude and eagerness to learn and implement made it easier for me to mentor him. With a little guidance, he was able to pick up new skills and start delivering quality work in Microsoft Azure and Azure Dev Ops. soon, he was at a level where he did not need anyone to oversee his deliverables. He is proactive and disciplined when it comes to work. I really enjoyed working with him and hope we get to work together in the future too.",
      "Creation Date": "01/12/23, 02:11 PM",
      "Status": "VISIBLE",
      "ProfileImg" :"https://media.licdn.com/dms/image/v2/D5603AQHTFUp7mWE99A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1683336417550?e=1743638400&v=beta&t=DTUVX-Q4Z7q1HruacdEs6RMy0PDfmEJj1pe8HsY0iCI"
    },
    {
      "First Name": "Swapnil",
      "Last Name": "Pradhan",
      "Company": "Zensar Technologies",
      "Job Title": "Principal Solution Architect",
      "Text": "Anshuman has a very inquisitive mind and gets to the bottom of the concepts. As a fresher he was a good addition to our integration team. He picked up the basics and thereby the intricacies of the implementation very quickly. He was confident to look at the problems and find the resolution as well. With the accelerated learning curve we were able to have him confidently work directly with the client.  As a fresher he has a great attitude and always looks out for opportunities to learn and expand his knowledge. Keep up the great work!",
      "Creation Date": "10/16/21, 09:59 AM",
      "Status": "VISIBLE",
      "ProfileImg" : "https://media.licdn.com/dms/image/v2/C5603AQEMdl0drz4KHg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1626416601869?e=1743638400&amp;v=beta&amp;t=0pTXcdv53HOPTjBUYWcveK4Qh8-ujkQMaMuSDYR3URI"
    },
    {
      "First Name": "Santhosh",
      "Last Name": "Manchala",
      "Company": "Tek Yantra Inc",
      "Job Title": "Senior Technology Specialist",
      "Text": "I rarely come across real talents who stand out like Dikshit. I had the pleasure of working with Dikshit, collaborating on several projects. Dikshit ability to handle multiple projects was unlike any I have seen before and made a dramatic increase in the productivity level of our projects, he has the ability to deliver Azure and Azure Devops being one of them. No matter how tense a meeting. As a collaborative and intelligent team member.",
      "Creation Date": "02/15/21, 08:08 AM",
      "Status": "VISIBLE",
      "ProfileImg" :"https://media.licdn.com/dms/image/v2/D5635AQEQ6X3mXmDYvA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1631621521587?e=1738771200&v=beta&t=_VAHgUkQ0eWoMRGGedLPC9XAGhn3unHMmV_LKeh7uIA"
    },
    {
      "First Name": "Suraj",
      "Last Name": "Pradhan",
      "Company": "Deloitte",
      "Job Title": "Senior Consultant",
      "Text": "Genuine expertise is the phrase that pops out when I think of Anshuman. He has immense experience in field of Azure cloud. His ability to handle multiple projects has made a dramatic impact for the productivity for the organization. He would be a great asset to any company.",
      "Creation Date": "02/05/21, 09:38 AM",
      "Status": "VISIBLE",
      "ProfileImg" :"https://media.licdn.com/dms/image/v2/C5103AQFlK5w0Z89wBA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1534014115357?e=1743638400&v=beta&t=9qKlK70RhSYwADEzflAfXDBmWDhhYdslNshVBYz0eCs"
    }
  ]



  const recommendationContainer = document.querySelector('.recommendations-carousel') ;

  const trackContainer = recommendationContainer.querySelector('.carousel__track-container .carousel__track') ;

  const carouselNavContainer = recommendationContainer.querySelector('.carousel__nav') ;
  console.log("trackContainer->>>>>>",carouselNavContainer);


  const createItem = (item,index) =>{
    return `<li class="carousel__slide ${index===0 ? "current-slide" : ""}">
                            <div class="carousel__slide__profile">
                                <img class="carousel__slide__profile-img"
                                    src="${item.ProfileImg}" alt = "profile-pic">
                                <h5 class="carousel__slide__profile-name">${item["First Name"] + " " +item["Last Name"]}</h5>
                                <h6 class="carousel__slide__profile-designation">${item["Job Title"]}</h6>
                                <h6 class="carousel__slide__profile-organisation">${item["Company"]}</h6>
                            </div>
                            <p class="carousel__slide__content">${item.Text}</p>
                        </li>` ;
  }


  const createnavIndicatorItem = (item,index) =>{
    return`<button class="carousel__indicator ${index===0 ? "current-slide" : ""} "></button>`
  }
  recommendations.forEach((item,index) =>{
    const cardHTML = createItem(item,index) ;
    const navIndicatorHTML = createnavIndicatorItem(item,index) ;
    trackContainer.insertAdjacentHTML('beforeend',cardHTML);

    carouselNavContainer.insertAdjacentHTML('beforeend',navIndicatorHTML) ;

    
  })