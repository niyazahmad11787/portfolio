import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "Java",
        level: SkillLevel.Expert,
        icon: "/skills/java.svg",
      },
      {
        title: "Python",
        level: SkillLevel.Intermediate,
        icon: "/skills/P2.svg",
      },
      // {
      //   title: "Dart",
      //   level: SkillLevel.Expert,
      //   icon: "/skills/dart.svg",
      // },
    ],
  },
  {
    title: "Web Automation",
    items: [
      {
        title: "Cucumber",
        level: SkillLevel.Expert,
        icon: "/skills/Cucumber.svg",
      },
      {
        title: "Selenium",
        level: SkillLevel.Expert,
        icon: "/skills/selenium.svg",
      },
      {
        title: "TestNG",
        level: SkillLevel.Expert,
        icon: "/skills/TestNG-logo.jpg",
      },
      // {
      //   title: "CSS",
      //   level: SkillLevel.Intermediate,
      //   icon: "/skills/css.svg",
      // },
      // {
      //   title: "SASS",
      //   level: SkillLevel.Intermediate,
      //   icon: "/skills/sass.svg",
      // },
      // {
      //   title: "Redux Toolkit",
      //   level: SkillLevel.Expert,
      //   icon: "/skills/redux.svg",
      // },
    ],
  },
  {
    title: "API Testing & Automation",
    items: [
      {
        title: "RestAssured",
        level: SkillLevel.Expert,
        icon: "/skills/restAssured.png",
      },
      {
        title: "Postman",
        level: SkillLevel.Expert,
        icon: "/skills/postman.png",
      },
      // {
      //   title: "Rest API",
      //   level: SkillLevel.Intermediate,
      //   icon: "/skills/rest1.png",
      // },
      // {
      //   title: "Nest.js",
      //   level: SkillLevel.Beginner,
      //   icon: "/skills/nestjs.svg",
      // },
    ],
  },
  {
    title: "Bug Tracking Tool",
    items: [
      {
        title: "Jira",
        level: SkillLevel.Expert,
        icon: "/images/jira-1.svg",
      },
      {
        title: "ClickUp",
        level: SkillLevel.Expert,
        icon: "/images/cl1.png",
      },
  
    ],
  },
  {
    title: "Database Testing",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Beginner,
        icon: "/skills/mysql.svg",
      },
    ],
  },
  {
    title: "CI/CD Tool",
    items: [
      // {
      //   title: "Docker",
      //   level: SkillLevel.Beginner,
      //   icon: "/skills/docker.png",
      // },
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/skills/github.svg",
      },
      {
        title: "Jenkins",
        level: SkillLevel.Intermediate,
        icon: "/skills/jenkins.svg",
      },

    ],
  },
  {
    title: "Miscellaneous",
    items: [
      {
        title: "Jmeter",
        level: SkillLevel.Intermediate,
        icon: "/images/j1.png",
      },
      {
        title: "Ubuntu",
        level: SkillLevel.Intermediate,
        icon: "/skills/ubuntu.png",
      },
      {
        title: "QA Touch",
        level: SkillLevel.Intermediate,
        icon: "/skills/QA-Touch.webp",
      },
    ],
  },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Expert,
        icon: "/images/analytical-skills.png",
      },
    ],
  },
];

export default skills;
