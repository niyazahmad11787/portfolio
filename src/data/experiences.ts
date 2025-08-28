import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "QA Executive",
    company: "Hippo Stores Technology Pvt Ltd.(A Dalmia Bharat Enterprise)",
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
  ];

export default experiences;
