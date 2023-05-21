import * as React from "react";
import "./App.css";
import WorkComponent from "./WorkComponent";
import EducationComponent from "./EducationComponent";
import profile from "./assets/profile.jpg";
import github from "./assets/github-box.png";
import mail from "./assets/sharp-email-24px.svg";
import linkedin from "./assets/linkedin-box.png";
import home from "./assets/home.svg";
import phone from "./assets/phone.svg";
import earth from "./assets/earth.svg";
import HeadlineComponent from "./HeadlineComponent";
import NameComponent from "./NameComponent";
import ContactInfoComponent from "./ContactInfoComponent";
import ButtonComponent from "./ButtonComponent";
import SummaryComponent from "./SummaryComponent";
import ScrollDownComponent from "./ScrollDownComponent";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="Image-text-buttons-container">
            <div className="Picture-container">
              <img src={profile} className="Picture" />
            </div>
            <div className="Name-container">
              <NameComponent text="CRISTIAN" />
              <NameComponent text="OSORIO BRETTI" />
            </div>

            <div className={"Buttons no-print"}>
              <ButtonComponent
                link="https://github.com/cristianbretti"
                icon={github}
              />
              <ButtonComponent
                link="mailto:cristian.osoriobretti@gmail.com"
                icon={mail}
              />
              <ButtonComponent
                link="https://www.linkedin.com/in/cristian-osorio-bretti-904270106/"
                icon={linkedin}
              />
            </div>
            <ScrollDownComponent />
          </div>
          <div className="Contact-info">
            <ContactInfoComponent text="www.osoriobretti.com" icon={earth} />
            <ContactInfoComponent
              text="cristian.osoriobretti@gmail.com"
              icon={mail}
            />
            <ContactInfoComponent text="(+46)70 782 6560" icon={phone} />
            <ContactInfoComponent
              text="Hammarbyterrassen 34, 120 63, Stockholm"
              icon={home}
            />
          </div>
        </div>
        <div className="App-body">
          <div className={"Section Left-section"}>
            <HeadlineComponent text="ABOUT ME" />
            <SummaryComponent
              headline=""
              text="I'm Cristian, a 26-year-old full stack-engineer with a M.Sc degree in Computer Science. I'm a driven and curious person who loves to learn new things and solve fun and complex problems."
            />
          </div>
          <div className={"Section Left-section"}>
            <HeadlineComponent text="WORK EXPERIENCE" />
            <WorkComponent
              name="Parks & Resorts - Software Engineer"
              time="2022 - 2023"
              texts={[
                "Fullstack developer working with everything from our highly trafficked websites to backend systems and internal tools.",
                "Planning and organize the work four all our public websites that are visited by millions of people every year. This includes stakeholder management, planning, and prioritization.",
                "Working mainly with React, Gatsby, Contentful, .NET and Azure.",
              ]}
            />
            <WorkComponent
              name="KRY - Software Engineer"
              time="2020 - 2022"
              texts={[
                "Developing high quality software with the main focus of storing and using health data.",
                "Working with databases, infrastructure, encryption, and writting efficient and maintainable backend applications.",
                "Mentoring new teammates and being a Scrum Master.",
                "Working mainly with SQL, RxJava and AWS.",
              ]}
            />
            <WorkComponent
              name="KRY - Software Engineer Intern"
              time="2019 - 2020"
              texts={[
                "Worked full stack with SQL, RxJava and web technologies to build and improve tools used internally at KRY",
              ]}
            />
            <WorkComponent
              name="WeKnowIT - App developer"
              time="2018"
              texts={[
                "Developed customised apps with React Native. Responsible for planning, building and delivering the entire product",
              ]}
            />
          </div>
          <div className={"Section Left-section"}>
            <HeadlineComponent text="EDUCATION" />
            <EducationComponent
              name="M.Sc in Computer Science - KTH Royal Institute of Technology"
              time="2018 - 2020"
              text="Master of Science in Computer Science and Engineering, specialized in Data Science and Machine Learning"
            />
            <EducationComponent
              name="B.Sc in Computer Science - KTH Royal Institute of Technology"
              time="2015 - 2018"
              text="Bachelor of Science in Computer Science and Engineering"
            />
          </div>
          <div className={"Section Left-section"}>
            <HeadlineComponent text="SKILLS" />
            <div className="Component-container">
              <p className={"Content Skills"}>
                React, Javascript, Typescript, Java, RxJava, C#, .NET, SQL, AWS,
                Azure, Docker, Javascript, React Native, NodeJS, WPF, Python.
              </p>
            </div>
          </div>
          <div className={"Section Resume"}>
            <a href="resume" download={true}>
              <button className={"Download-button no-print"}>
                Download résumé
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
