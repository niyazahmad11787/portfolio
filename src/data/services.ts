import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Web Automation",
    icons: [
      "/skills/Cucumber.svg",
      "/skills/java.svg",
      "/skills/selenium.svg",
      "/skills/TestNG-logo.jpg",
      "/skills/restAssured.png",
    ],
    shortDescription:
      "I create manual & Automation TestCases for bug free application.",
    description:
      "I ensure seamless performance and robust functionality of web applications using Selenium, Java, TestNG, and the BDD framework. By automating end-to-end testing, I deliver efficient, reliable, and high-quality solutions that enhance user experience, improve test coverage, and align with business goals.",
  },
  {
    id: 2,
    title: "Manual Testing",
    icons: [
      "/skills/manual.png",
      "/skills/reg.png",
      "/skills/testing.png",
      "/skills/QA-Touch.webp",
      // "/skills/css.svg",
    ],
    shortDescription: "I created Manual testCases before the development.",
    description:
      "I ensure the quality and reliability of applications through meticulous manual testing processes. Using QA Touch for writing and executing test cases, I perform functional testing, regression testing, usability testing, and smoke testing to identify and resolve issues early. By validating application behavior and focusing on precision, I deliver seamless, user-friendly solutions that enhance product quality and ensure a flawless user experience."
  },
  {
    id: 3,
    title: "API Automation",
    icons: [
      "/skills/socket-io.png",
      "/skills/postman.png",
      "/skills/restAssured.png",
      "/skills/Cucumber.svg",
      "/skills/aws.svg",
    ],
    shortDescription: "I create robust and scalable backend infrastructures.",
    description:
      "I ensure the reliability, performance, and security of REST and SOAP APIs through manual testing using Postman and automation using RestAssured with the BDD framework. By validating request-response integrity, data accuracy, error handling, and response time, I ensure seamless communication between systems. I focus on scalability, functionality, and robustness to deliver efficient backend solutions that handle complex data and high traffic effortlessly.",
  },
  {
    id: 4,
    title: "Bug Tracking & Management",
    icons: [
      "/skills/git.svg",
      "/images/pic_21-1.png",
      "/images/jira-1.svg",
      "/images/cl1.png",
      "/skills/ubuntu.png",
    ],
    shortDescription:
      "I efficiently track, manage,bugs by using bug tracking tools.",
    description:
      "I efficiently track, manage, and resolve issues using tools like Bitrix, Jira, and ClickUp. By leveraging these bug tracking platforms, I ensure streamlined communication, prioritization of tasks, and timely resolution of defects. My focus is on maintaining product quality and ensuring a seamless user experience by effectively managing the software development lifecycle.",
  },
  {
    id: 5,
    title: "CI/CD Tools",
    icons: [
      "/skills/docker.svg",
      "/skills/git.png",
      "/skills/git.svg",
      "/skills/jenkins.svg",
      "/skills/terraform.svg",
    ],
    shortDescription: "I streamline CI/CD operations processes.",
    description:
      "I optimize the QA process by integrating DevOps practices using tools like Git, GitHub, and Jenkins. I ensure seamless CI/CD pipelines for automated testing and deployment, enabling faster feedback and reliable software delivery. By streamlining version control, build automation, and test execution, I enhance efficiency, scalability, and the overall quality of software releases.",
  },
  {
    id: 6,
    title: "Database Testing",
    icons: [
      "/skills/mysql.svg",
      "/skills/mysql.svg",
      "/skills/postgresql.svg",
      "/skills/mongodb.svg",
      "/skills/sqlite.svg",
    ],
    shortDescription: "I validate accuracy, integrity database systems.",
    description:
      "I ensure the accuracy, integrity, and performance of database systems through comprehensive testing. With expertise in SQL and NoSQL databases, I validate data consistency, write and execute complex queries, and verify backend operations. By focusing on data integrity, security, and performance optimization, I ensure seamless data management and reliable application functionality.",
  },
];

export default services;
