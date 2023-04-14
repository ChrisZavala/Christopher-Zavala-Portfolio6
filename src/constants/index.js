import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    intel, 
    boxx,
    gd,
    threejs,
    plantracker,
    cineme,
    drinksrus,
    techblog,
    cinemetrailer,
    weather,
    UT,
    UTSA,
    TAMU,
  } from "../assets";
  
  export const navLinksdata = [
    {
      _id: 1001,
      title: "Home",
      link: "/",
    },
    {
      _id: 1002,
      title: "About Me",
      link: "about",
    },
    {
      _id: 1003,
      title: "Portfolio",
      link: "works",
    },
    {
      _id: 1004,
      title: "Experience",
      link: "experience",
    },
    {
      _id: 1005,
      title: "Resume",
      link: "resume",
    },
    {
      _id: 1006,
      title: "Contact",
      link: "contact",
    },
  
  ];
  
  
  const services = [
    {
      title: "System Engineer",
      icon: web,
    },
    {
      title: "Developer",
      icon: mobile,
    },
    {
      title: "Test Engineer",
      icon: backend,
    },
    {
      title: "FrontEnd Developer",
      icon: creator,
    },
    {
      title: "BackEnd Developer",
      icon: backend,
    },
    {
      title: "Computer Engineer",
      icon: creator,
    },
    {
      title: "Web App Developer",
      icon: mobile,
    },
    {
      title: "Full-Stack Developer",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Platform Support Technician",
      company_name: "Intel",
      icon: intel,
      iconBg: "#383E56",
      date: "July 2021 - September 2022",
      points: [
        "Required in-depth knowledge and familiarity with Intel computer server architecture for troubleshooting purposes.",
        "Collaborating with other team members to debug issues with the platform for stability testing.",
        "Assembled various computer system for hardware and software testing of new released Xeon CPU processors.",
        "Used a variety of equipment to perform quick check with oscilloscopes, logic analyzer, network analyzers for system testing.",
      ],
    },
    {
      title: "System Engineer",
      company_name: "BOXX Technologies",
      icon: boxx,
      iconBg: "#E6DEDD",
      date: "July 2013 - March 2020",
      points: [
        "Delivered in-depth management of ODM and OEM partners fro product development. Development of engineering schedules and processes for successful delivery of products.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Performed benchmarking of all released products to marketing for comparison with comparable existing products.",
        "Participated in stability testing of overclocked cpu processors to find the maximum performance deliverable to our consumer partners.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "General Dynamics C4 Systems",
      icon: gd,
      iconBg: "#383E56",
      date: "July 2010 - March 2012",
      points: [
        "Lead Integration & Test Engineer for the Taclane Multibook Project.",
        "Contribute to the software developmental process and writing software for mission critical components for projects.",
        "Designs, develops, operates, maintains, and documents software to be applied to engineering, scientific, and manufacturing requirements.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Applies the appropriate standards, processes, procedures, and tools throughout the system development life cycle to support the generation of technical engineering products."
      ],
    },
  ];

  const educations = [
    {
      title: "Certificate Earned in Full Stack Web Development",
      company_name: "The University of Texas at Austin",
      icon: UT,
      iconBg: "#383E56",
      date: "December 2022 - March 2023",
      points: [
        "Professional exposure in JavaScript technology such as React JS, MongoDB, Express.js and Node.js",
        "Designed over 10+ front-end and back-end websites to show strong competency in the MERN Stack development."
       
      ],
    },
    {
      title: "The University of Texas at San Antonio",
      company_name: "Bachelors of Science in Electrical Engineering",
      icon: UTSA,
      iconBg: "#E6DEDD",
      date: "August 2008 - August 2010",
      points: [
        "Majored in Electrical Engineering with a concentration in Computer Engineering",
        
      ],
    },
    {
      title: "Texas A&M University",
      company_name: "Electrical Engineering",
      icon: TAMU,
      iconBg: "#383E56",
      date: "August 2000 - May 2003",
      points: [
        "Started majoring in Electrical Engineering.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Plan Tracker",
      description:
        "Plan Tracker is a web based application offering client management services to personal trainers with features to plan their schedules, store, track, manage client information.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "blue-text-gradient",
        },
    
      ],
      image: plantracker,
      source_code_link: "https://github.com/kpeazzoni/plan-tracker-app",
      live_site_link:"https://plan-tracker-app.herokuapp.com/",
    },
    {
      name: "CineMe",
      description:
        "CineMe is an app the user will be able to personalize their watch list! You are also able to add comments on your favorite movies and rate the movies you have watch.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mySQL",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
      ],
      image: cineme,
      source_code_link: "https://github.com/ChrisZavala/CineMe2.0",
      live_site_link:"https://cineme-2.herokuapp.com/",
    },
    {
      name: "Drinks R Us",
      description:
        "Drinks Я US: Alcohol, Ingredients, or Cocktail Name. Designed for people on the move looking for a quick way to access information on how to make their favorite cocktail.",
      tags: [
        {
          name: "html5",
          color: "blue-text-gradient",
        },
        {
          name: "bulma",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: drinksrus,
      source_code_link: "https://github.com/Re-Gi/Project1-CocktailSearch",
      live_site_link:"https://re-gi.github.io/Project1-CocktailSearch/",
    },
    {
      name: "The MVC Tech Blog",
      description:
        "Tech-Blog app, which allows the user to post blog posts and comment to other developers in the industry. Users can create accounts, edit and delete their posts and have the interaction of blog app at their convenience.",
      tags: [
        {
          name: "handlebars",
          color: "blue-text-gradient",
        },
        {
          name: "mySQL",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "blue-text-gradient",
        },
    
      ],
      image: techblog,
      source_code_link: "https://github.com/ChrisZavala/UTA-bootcamp-challenge14",
      live_site_link:"https://polar-castle-47001.herokuapp.com/",
    },
    {
      name: "CineMe Trailers",
      description:
        "CineMe Trailer is an extension of CineMe. I just wanted to create a site that would allow you to watch trailers to the movies of your choice. Again this was an extension of CineMe and soon I would like to combine both sites.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
      ],
      image: cinemetrailer,
      source_code_link: "https://github.com/ChrisZavala/CineMeTrailer",
      live_site_link:"https://chriszavala.github.io/CineMeTrailer/",
    },
    {
      name: "Weather Dashboard",
      description:
        "Created a simple weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. Pick a different city and see the 5-day forecast of that city to help your travels. Don't forget to check the forecast.",
      tags: [
        {
          name: "restAPI",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/ChrisZavala/UTA-bootcamp-challenge6",
      live_site_link:"https://chriszavala.github.io/UTA-bootcamp-challenge6/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, educations };
  