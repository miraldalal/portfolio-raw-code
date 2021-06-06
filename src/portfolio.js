/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mirals Portfolio",
  description:
    "Hello I am Miral",
  og: {
    title: "Mirals Portfolio",
    type: "website",
    url: "https://miraldalal.github.io",
  },
};

//Home Page
const greeting = {
  title: "Miral Dalal",
  logo_name: "Miral Dalal",
  nickname: "",
  subTitle:
  "Ideate, Analyze, Collaborate, Create, Test, Launch, Measure and Improve Products to solve user needs and drive business",
  resumeLink:
    "https://drive.google.com/file/d/1W1Db7wOrFlMcz0SRw4AgAhzZA8N8QqlE/view?usp=sharing",
  portfolio_repository: "https://drive.google.com/file/d/1W1Db7wOrFlMcz0SRw4AgAhzZA8N8QqlE/view?usp=sharing",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/miraldalal/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
     name: "YouTube",
     link: "https://www.youtube.com/channel/UCYEY6BqQb9eLTw_lUaeHUhQ",
     fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
     backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
   },
  {
    name: "Email",
    link: "mailto:dalal.m@northeastern.edu",
    fontAwesomeIcon:"fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Outlook",
  //   link: "mailto:dalal.m@northeastern.edu",
  //   fontAwesomeIcon: "vscode-icons:file-type-outlook", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/a2zcravings/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
     backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Product Management",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Build product roadmaps and prioritize features",
        "⚡ Develop go-to market strategies and drive sales funnel",
        "⚡ Impelent processes to improve products",
        "⚡ Utilize data using various tools to visualize insights",
        "⚡ Conduct market research and build product strategies",
        "⚡ Collabrate cross functionally with internal and external stakeholders",
      ],
      softwareSkills: [
        {
          skillName: "MySql",
          fontAwesomeClassname: "cib:mysql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "cib:tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Salesforce",
          fontAwesomeClassname: "logos-salesforce",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        }
      ],
    },
    // {
    //   title: "Agile Scrum",
    //   fileName: "FullStackImg",
    //   skills: [
    //     "⚡ XXX",
    //     "⚡ XXX",
    //     "⚡ XXX",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Jira",
    //       fontAwesomeClassname: "logos-jira",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Scrum",
    //       fontAwesomeClassname: "grommet-icons:cycle",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Sass",
    //       fontAwesomeClassname: "simple-icons:sass",
    //       style: {
    //         color: "#CC6699",
    //       },
    //     },  
    //   ],
    // },
    {
      title: "Agile Project Management ",
      fileName: "FullStackImg",
      skills: [
        "⚡ Manage Budget, scope, schedule of the project",
        "⚡ Monitor project progress using various management tools",
        "⚡ Utilize Agile-scrum principles in managing projects",
      ],
      softwareSkills: [
        {
          skillName: "Jira",
          fontAwesomeClassname: "logos-jira",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scrum",
          fontAwesomeClassname: "grommet-icons:cycle",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Slack",
          fontAwesomeClassname: "logos-slack-icon",
          style: {
            // backgroundColor: "transparent",
          },
        },
        {
          skillName: "Oracle",
          fontAwesomeClassname: "grommet-icons:oracle",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Microsoft Teams",
          fontAwesomeClassname: "mdi-microsoft-teams",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Sharepoint",
          fontAwesomeClassname: "simple-icons:microsoftsharepoint",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MS Project",
          fontAwesomeClassname: "file-icons:microsoft-project",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Develop low fidelity wireframes based on market research and user interviews",
        "⚡ Translate user stories in wireframes and conducting surveys to validate it",
        "⚡ Develop minimum viable product and get feedback from target users to improve",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Balsamiq",
          fontAwesomeClassname: "ph-smiley",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Miro",
          fontAwesomeClassname: "simple-icons:miro",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Product Management Nanodegree",
      iconifyClassname: "logos-udacity",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://confirm.udacity.com/SKDHAKSU",
    },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Northeastern University",
      subtitle: "Masters Degree, Engineering Management",
      logo_path: "neu_logo.png",
      alt_name: "Northeastern University",
      duration: "2019 - Present",
      descriptions: [
        "⚡ CourseWork: Product Management, Business Analysis and Information Engineering, Project Management, Data Management for Analytics, Product Development, UI/UX, Agile Software Development, Economic Decision Making, Customer Perfomance Modelling, Business Model Design and Innovation, Probability and Statistics and Operation Research",
        "⚡ Excelled in courses with GPA of 3.95/4",
        "⚡ Implemented knoweldge gained from the courses by building projects in domains of Robotics, Healtcare, E-commerece, Finance, Sports, Sustainable technologies and Educational Domain",
        "⚡ Mentored 175+ students as a Teaching Assistant for Project Management Course",
        "⚡ Led marketing, promotional and membership initiatives as an elected Vice President of Northeastern Chapter of American Society of Engineering Management club",
      ],
      website_link: "https://www.northeastern.edu/",
    },
    
    {
      title: "Gujarat Technological University",
      subtitle: "Bachelor’s Degree, Electronics & Communication ",
      logo_path: "gtu_logo.png",
      alt_name: "GTU",
      duration: "2014 - 2018",
      descriptions: [
        "⚡ Studied concepts of Embedded system, VLSI, Digital Signal Systems, Control Systems, Power Electronics, Communication Networks and Telecommunication ",
        "⚡ Implemented knowledge gained from the courses by building projects in domains of Robotics, Power Electronics and Communication domain",
       // "⚡ Mentored 175+ students for project work and course work as a Teaching Assistant of Project Management",
      ],
      website_link: "https://www.gtu.ac.in/",

    },
    // {
    //   title: "Gujarat Technological University",
    //   subtitle: "Bachelor’s Degree, Electronics & Communication ",
    //   logo_path: "gtu_logo.png",
    //   alt_name: "GTU",
    //   duration: "2014 - 2018",
    //   descriptions: [
    //     "⚡ Studied concepts of Embedded system, VLSI, Digital Signal Systems, Control Systems, Power Electronics, Communication Networks and Telecommunication ",
    //     "⚡ Implemented knowledge gained from the courses by building projects in domains of Robotics, Power Electronics and Communication domain",
    //    // "⚡ Mentored 175+ students for project work and course work as a Teaching Assistant of Project Management",
    //   ],
    //   website_link: "https://www.gtu.ac.in/",

    // },
    // {
    //   title: "Gujarat Technological University",
    //   subtitle: "Bachelor’s Degree, Electronics & Communication ",
    //   logo_path: "gtu_logo.png",
    //   alt_name: "GTU",
    //   duration: "2014 - 2018",
    //   descriptions: [
    //     "⚡ Studied concepts of Embedded system, VLSI, Digital Signal Systems, Control Systems, Power Electronics, Communication Networks and Telecommunication ",
    //     "⚡ Implemented knowledge gained from the courses by building projects in domains of Robotics, Power Electronics and Communication domain",
    //    // "⚡ Mentored 175+ students for project work and course work as a Teaching Assistant of Project Management",
    //   ],
    //   website_link: "https://www.gtu.ac.in/",

    // },
    // {
    //   title: "Gujarat Technological University",
    //   subtitle: "Bachelor’s Degree, Electronics & Communication ",
    //   logo_path: "gtu_logo.png",
    //   alt_name: "GTU",
    //   duration: "2014 - 2018",
    //   descriptions: [
    //     "⚡ Studied concepts of Embedded system, VLSI, Digital Signal Systems, Control Systems, Power Electronics, Communication Networks and Telecommunication ",
    //     "⚡ Implemented knowledge gained from the courses by building projects in domains of Robotics, Power Electronics and Communication domain",
    //    // "⚡ Mentored 175+ students for project work and course work as a Teaching Assistant of Project Management",
    //   ],
    //   website_link: "https://www.gtu.ac.in/",

    // },
    // {
    //   title: "Gujarat Technological University",
    //   subtitle: "Bachelor’s Degree, Electronics & Communication ",
    //   logo_path: "gtu_logo.png",
    //   alt_name: "GTU",
    //   duration: "2014 - 2018",
    //   descriptions: [
    //     "⚡ Studied concepts of Embedded system, VLSI, Digital Signal Systems, Control Systems, Power Electronics, Communication Networks and Telecommunication ",
    //     "⚡ Implemented knowledge gained from the courses by building projects in domains of Robotics, Power Electronics and Communication domain",
    //    // "⚡ Mentored 175+ students for project work and course work as a Teaching Assistant of Project Management",
    //   ],
    //   website_link: "https://www.gtu.ac.in/",

    // },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page

const experience = {
  title: "Experience",
  subtitle: "Product Management, Project Management, UI/UX",
  description:
    "I am currently working with Honeywell in Robotics team as Product Manager Coop and prior to that I have worked on software and hardware products and used my Prodcut management, Project management, Data Analysis, Business Intelligence, Market Research and UI/UX skills to drive business.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Experience",
      experiences: [
        {
          title: "Product Management Coop",
          company: "Honeywell",
          company_url: "https://www.honeywell.com/us/en",
          logo_path: "Honeywell_logo.png",
          duration: "Jan 2021 - PRESENT",
          location: "Boston, MA",
          description:
            "Developed Ad-hoc presentations on competitor’s & their customers, use cases, product specifications & market trends for Product Portfolio for Robotics Offering Management team to make tactical decision. Built dashboards and reports for leads, campaigns & opportunities pipelines on Salesforce (CRM), Excel, Tableau & Power BI, reducing sales team time to follow up on leads by 15%. Evaluated robotics use case opportunities and trade-offs, partnership other companies by providing insights on their product performance, business strategy, innovative features and product pricing.",
          color: "#0879bf",
        },
        {
          title: "Product Marketing Research, Experintial Network",
          company: "HUB360",
          company_url: "https://www.hub360.ie/",
          logo_path: "HUB_logo.png",
          duration: "Jan 2020 - Apr 2020",
          location: "Virtual, Ireland",
          description:
            "Conducted market research and identified 60 companies which can potentially use software in New England, USA. Identified competitors to analyze their data about their networks, customer strategy and software selling points. Engaged with 50 stakeholders to understand their business needs, challenges and objectives and reported to CEO",
          color: "#9b1578",
        },
        {
          title: "Associate Product Manager",
          company: "Narayan PowerTech",
          company_url: "http://www.narayanpowertech.com/",
          logo_path: "Narayan_logo.png",
          duration: "Jun 2018 - July 2019",
          location: "Vadodara, Gujarat",
          description:
            "Launced new hardware and software prodcuts track based on customer demands by collabrating cross functionally with electrical engineers, software engineers, application developers, project managers, product develoers, UI/UX, business development, legal, marketing and sales team boosting revenue by 18%",
          color: "#9b1578",
        },
        {
          title: "Product Design Project Intern",
          company: "Institute of Plasma Research",
          company_url: "https://www.ipr.res.in/",
          logo_path: "IPR_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Gandhinagar, Gujarat",
          description:
            "Designed 1KV, 3A regulated DC power supply with voltage and current regulation product using MATLAB and Simulink tool by using concepts of non linear control system, signal systems and power electronics",
          color: "#fc1f20",
        },
        {
          title: "Product Management Intern",
          company: "Holiday Craft",
          company_url: "http://www.holidaycraft.in/",
          logo_path: "Holiday_logo.png",
          duration: "June 2017 - July 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "Facilitated software changes using agile/scrum methods leading to 20% decrease in churn rate and 15% decrease in bounce rate in a month and improved user experience by implementing HEART metric. Proposed go to market strategy and estimated TAM and ROI for social media marketing campaign leading to 27% increase in sales by analysing data from key business metrics, customer insights and market trends. Spearheaded inbound marketing campaign and increased social media presence by 70%",
          color: "#fc1f20",
        },
        {
          title: "Product Management Intern",
          company: "CashBasket",
          //company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "Cashbasket_logo.png",
          duration: "Jan 2017 - Apr 2017",
          location: "Ahmedabad, Gujarat",
          description:
            " Conducted usability testing survey on product UI/UX by interviewing 350 customers, understood their friction point and translated user insights in 6 features for seamless user experiences. Launched 3 product improvements by managing average velocity of 24 user stories per sprints leading to 70% customer satisfaction using agile SDLC process. Analyzed qualitative and quantitative data of users on MS EXCEL according to demography, behaviour and geography to formulate marketing strategies leading to 30% sales increment and 20% more downloads. Improved customer experience by creating content and videos for end users leading to 27% increase in Net Promoter system and 15% increase in engagement",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Projects",
      experiences: [
        {
          title: "UX Wireframes",
          company: "Interview Hero APP",
          company_url: "https://balsamiq.cloud/stbblc2/pwymg2z",
          logo_path: "neu_logo.png",
         // duration: "May 2019 - Sept 2019",
         // location: "Gurgaon, Haryana",
          description:
            "For Northeastern University students who want to excel in job interviews with confidence,maintain composed facial expressions, polish communication skills, and crack the interview, our Interview Hero app is a one-stop interview solution. Unlike other applications which aren’t able to offer personalized feedback, Interview Hero provides a platform where students can schedule interview practice appointments with industry experts and career advisors, get interview tips and feedback, and practice domain-related questions for interviews.",
          color: "#ee3c26",
        },
        {
          title: "Product Management",
          company: "DoorDash",
          company_url:"https://drive.google.com/drive/folders/1VtgJAiSyQmoypcc09ER3jK5Z_dnzOua6",
          logo_path: "doordash_logo.png",
          //duration: "Nov 2018 - Dec 2018",
          //location: "Work From Home",
          description:
            "Developed Vision, strategy and product Roadmap for a web application which will have the ability to track and reroute robots which were delivering food to customers for operational teams. Developed High Fiedlity wireframes in FIGMA to showcase MVP about final product",
          color: "#0071C5",
        },
        {
          title: "Project Management ",
          company: "Projet Charter for Developing Automatic Solar Grass Cutter Robots",
          company_url:"https://drive.google.com/file/d/1piOLBlMx6OFFydAZy8rd4UuGcK7Zi_Id/view?usp=sharing",
          logo_path: "neu_logo.png",
          //duration: "Nov 2018 - Dec 2018",
          //location: "Work From Home",
          description:
            "Estimated budget, timeline, resource required for development of solar grass cutter robots and showcase impelementation of Agile- Scrum principles. Showcased Risk and its mitgation strategies, upfront investment and break even point and assigned responsibilty to stakeholders for succefull impelemtation of project using tools like MS Project, JIRA, MS VISIO",
          color: "#0071C5",
        },
        {
          title: "Data Analytics, Management and Engineering",
          company: "Hospital Database Management for Healtcare Analytics",
          company_url:
            "https://www.youtube.com/watch?v=FOlg8wnQM0o&ab_channel=MiralDalal",
          logo_path: "neu_logo.png",
          //duration: "Nov 2018 - Dec 2018",
          //location: "Work From Home",
          description:
            "Idea was focused on solving problems of operations in hospitals by developing a database managment system in MySQL and NoSQL(MongoDB) and showcased insights which would help in reducting costs of hospitals in Tableau and Python.  ",
          color: "#0071C5",
        },
        {
          title: "Business Model Design and Innovation",
          company: "Contillegent(OnePlus)",
          company_url:
            "https://drive.google.com/file/d/1y1NTwARoHynkGNGLLc3QNhT7AiJRvNE9/view?usp=sharing",
          logo_path: "oneplus.png",
          //duration: "Nov 2018 - Dec 2018",
          //location: "Work From Home",
          description:
            "Developed a Business Model and Innovation Report for development of smart waste monitoring system for Contillegent (OnePlus) which will help them to understand investments, ROI, venture strategies and Business Models for the prodcut",
          color: "#0071C5",
        },
        {
          title: "Siri New Business Case",
          company: "Apple",
          company_url:"https://drive.google.com/file/d/1vI3ASfzxDLr98vFaRYxFyWtV4tQF_hUE/view?usp=sharing",
          logo_path: "apple.png",
          //duration: "Nov 2018 - Dec 2018",
          //location: "Work From Home",
          description:
            "Developed a business proposal for development a new Siri product which would hear audio ",
          color: "#0071C5",
        },
        {
          title: "App to find Sportbuddies",
          company: "Actimate",
          company_url:"https://drive.google.com/file/d/1vaarZTae17Q53of4dmc4AoqYyvt1IOdM/view?usp=sharing",
          logo_path: "neu_logo.png",
          //duration: "Nov 2018 - Dec 2018",
          //location: "Work From Home",
          description:
            "An APP for all sports enthusiats who would love to play sports with anyone who has similar interset and skillset at desired location or with there buddies at desired location. We addressed this challange by conducting market research and user interviews and worked on Business canvas model, market specification and stakeholders assessments metrics for development of this application.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Leadership",
      experiences: [
        {
          title: "Vice President of Publicity and Membership",
          company: "Northeastern American Society of Engineering Management Chapter",
          company_url: "https://www.linkedin.com/company/35560863/admin/",
          logo_path: "ASEM.png",
         // duration: "June 2019 - April 2020",
          location: "Boston, MA",
          description:
            "Elected as Vice President for Publicity and Membership of American Society of Engineering Management (ASEM) at Northeastern University and increased event footfall by 30% and membership by 13%",
          color: "#4285F4",
        },
        // //{
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
// const projectsHeader = {
//   title: "Projects",
//   description:
//     "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
//   avatar_image_path: "projects_image.svg",
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "circle-cropped.png",
    description:
      "Always ready to work on products and solve customer pain points. Reach me out and I will respond in 24 hrs",
  },
  // //blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://ashutoshhathidara.wordpress.com",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle:
      "Boston, Massachusetts",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Boston,+MA/@42.3145186,-71.1103692,11z/data=!3m1!4b1!4m5!3m4!1s0x89e3652d0d3d311b:0x787cbf240162e8a0!8m2!3d42.3600825!4d-71.0588801",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1(857)-971-0527",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  //projectsHeader,
  contactPageData,
};
