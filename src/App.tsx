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
              text="I'm Cristian, a 22-year-old student at the Royal Institute of Technology in Stockholm, Sweden.
              My passions include exploring new things, taking on interesting problems and using computer science to build great things."
            />
          </div>
          <div className={'Section Left-section'}>
            <HeadlineComponent text="WORK EXPERIENCE" />
            <WorkComponent
              name="KRY - Web developer"
              time="Mars 2019 - present"
              text="Working full stack on a internal web system"
            />
            <WorkComponent
              name="WeKnowIT - App developer"
              time="Mars 2018 -  Mars 2019"
              text="Developed customized apps with React Native. Resposible for planning, building and delivering the entire product"
            />
            <WorkComponent
              name="Topgolf Sweden - Software developer"
              time="May 2017 - August 2017"
              text="Built a Windows application from scratch with C# and WPF"
            />
          </div>
          <div className={'Section Left-section'}>
            <HeadlineComponent text="EDUCATION" />
            <EducationComponent
              name="KTH - Royal Institute of Technology"
              time="August 2015 - present"
              text="Pursuing a M.Sc in Computer Science with a specialization in data science and machine learning"
            />
          </div>
          <div className={'Section Left-section'}>
            <HeadlineComponent text="VOLUNTEER EXPERIENCE" />
            <VolunteerComponent
              name="Project leader"
              time="January 2018 - December 2018"
              text="Head of the reception of new students at the computer science chapter. Lead a team of 60 students to organize 5 weeks of events for 200 people to partake in"
            />
            <VolunteerComponent
              name="Group leader"
              time="January 2017 - December 2017"
              text="Lead a group of 26 students that worked with the reception of new students at the computer science chapter"
            />
          </div>
          <div className={'Section Left-section'}>
            <HeadlineComponent text="SKILLS" />
            <div className="Component-container">
              <p className={'Content Skills'}>
                Javascript, HTML, CSS, React, React Native, Redux, Node, C#,
                WPF, Java, Python, Git, SQL
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
