import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Software Test Engineer",
    company: "Hippo Stores Technology Pvt Ltd.",
    startDate: "Aug 2024",
    isCurrentJob: true,
    location: "Gurgaon, India",
    description: [
      "Ensuring the quality and reliability of software through rigorous testing processes.",
      "Developing and executing test cases for functional, regression, and performance testing.",
      "Performing API testing for REST and SOAP services using Postman for manual testing and RestAssured with BDD framework for automation.",
      "Validating database integrity, data accuracy, and backend operations through SQL queries and database testing.",
      "Collaborating closely with development teams to identify and resolve issues early in the development cycle.",
      "Adhering to industry best practices and ensuring test automation coverage using tools like Selenium, Postman, and RestAssured."
    ] 
  },
  {
    designation: "QA Engineer",
    company: "Dhwani Rural Information System",
    startDate: "Aug 2022",
    endDate: "Aug 2024",
    isCurrentJob: false,
    location: "Gurgaon, India",
    description: [
      "Performed manual testing to validate functionality, usability, and reliability of applications.",
      "Conducted comprehensive database testing to ensure data integrity and accuracy using SQL queries.",
      "Executed API testing for REST and SOAP services using Postman, ensuring request-response validation and error handling.",
      "Performed load testing to analyze system performance and identify bottlenecks under high traffic conditions.",
      "Tracked and managed bugs efficiently using tools like ClickUp and Bitrix, ensuring timely issue resolution.",
      "Collaborated with cross-functional teams to ensure product quality and seamless user experience."
    ],
  },
  // {
  //   designation: "Full Stack Development Intern",
  //   company: "TECHOX LLP",
  //   startDate: "May 2021",
  //   endDate: "Jul 2022",
  //   isCurrentJob: false,
  //   location: "Remote",
  //   description: [
  //     "Revamped and enhanced 3+ mobile apps using Flutter.",
  //     "Deployed RESTful APIs for seamless app-server integration.",
  //     "Integrated Google AdMob to effectively monetize applications.",
  //     "Contributed to boosting app functionality and revenue generation.",
  //   ],
  // },
  // {
  //   designation: "Web Development Intern",
  //   company: "Career Corner Education Pvt Ltd",
  //   startDate: "Jul 2021",
  //   endDate: "Nov 2021",
  //   isCurrentJob: false,
  //   location: "Remote",
  //   description: [
  //     "Spearheaded website development and enhancements for company portals.",
  //     "Prioritized clean, reusable code with modern tech stacks.",
  //     "Efficiently managed multiple tasks with minimal supervision.",
  //     "Collaborated with senior team members to meet and exceed project goals.",
  //   ],
  // },
];

export default experiences;
