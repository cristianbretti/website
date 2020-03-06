import * as React from 'react';
import './App.css';
import WorkComponent from './WorkComponent';
import EducationComponent from './EducationComponent';
import VolunteerComponent from './VolunteerComponent';
import profile from './assets/profile.jpg';
import github from './assets/github-box.png';
import mail from './assets/sharp-email-24px.svg';
import linkedin from './assets/linkedin-box.png';
import home from './assets/home.svg';
import phone from './assets/phone.svg';
import earth from './assets/earth.svg';
import HeadlineComponent from './HeadlineComponent';
import NameComponent from './NameComponent';
import ContactInfoComponent from './ContactInfoComponent';
import ButtonComponent from './ButtonComponent';
import SummaryComponent from './SummaryComponent';
import ScrollDownComponent from './ScrollDownComponent';

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

            <div className={'Buttons no-print'}>
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
              text="Slottsvägen 3, 183 52, Täby"
              icon={home}
            />
          </div>
        </div>
        <div className="App-body">
          <div className={'Section Left-section'}>
            <HeadlineComponent text="ABOUT ME" />
            <SummaryComponent
              headline=""
              text="I'm Cristian, a 23-year-old student at the Royal Institute of Technology in Stockholm, Sweden.
              My passions include exploring new things, taking on interesting problems and using computer science to build great products"
            />
          </div>
          <div className={'Section Left-section'}>
            <HeadlineComponent text="WORK EXPERIENCE" />
            <WorkComponent
              name="KRY - Software Engineer Intern"
              time="Mars 2019 - present"
              text="Working full stack with SQL, RxJava and web technologies to build and improve tools used internally at KRY"
            />
            <WorkComponent
              name="WeKnowIT - App developer"
              time="Mars 2018 -  Mars 2019"
              text="Developed customised apps with React Native. Responsible for planning, building and delivering the entire product"
            />
            <WorkComponent
              name="Topgolf Sweden - Software developer"
              time="May 2017 - August 2017"
              text="Built a Windows application from with C# and WPF"
            />
          </div>
          <div className={'Section Left-section'}>
            <HeadlineComponent text="EDUCATION" />
            <EducationComponent
              name="M.Sc in Computer Science - KTH Royal Institute of Technology"
              time="August 2018 - present"
              text="Master of Science in Computer Science and Engineering, specialized in Data Science and Machine Learning"
            />
            <EducationComponent
              name="B.Sc in Computer Science - KTH Royal Institute of Technology"
              time="August 2015 - June 2018"
              text="Bachelor of Science in Computer Science and Engineering"
            />
          </div>
          <div className={'Section Left-section'}>
            <HeadlineComponent text="VOLUNTEER EXPERIENCE" />
            <VolunteerComponent
              name="Head of Sales"
              time="August 2019 - August 2020"
              text="Leading a group of 5 peers in a sales group. Responsibilities include supervising and improving our workflow to make sure we meet our goal of bringing in 1M SEK to our student project"
            />
            <VolunteerComponent
              name="Project leader"
              time="January 2018 - December 2018"
              text="Head of the reception of new students at the computer science chapter. Led a team of 60 students to organize 5 weeks of events for 200 people to partake in. Responsibilities included making a budget, recruiting, planning logistics, being the main contact towards KTH and leading everyone towards our common goal"
            />
            <VolunteerComponent
              name="Group leader"
              time="January 2017 - December 2017"
              text="Led a group of 26 students that worked with the reception of new students at the computer science chapter"
            />
          </div>
          <div className={'Section Left-section'}>
            <HeadlineComponent text="SKILLS" />
            <div className="Component-container">
              <p className={'Content Skills'}>
              Javascript, HTML, CSS, React, React Native, Redux, Node, Java, RxJava,
              SQL, C#, WPF, Python, Git, Bash
              </p>
            </div>
          </div>
          <div className={'Section Resume'}>
            <a href="resume" download={true}>
              <button className={'Download-button no-print'}>
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
