import * as React from 'react';
import './App.css';
import WorkComponent from './WorkComponent';
import EducationComponent from './EducationComponent';
import VolunteerComponent from './VolunteerComponent';
import profile from './profile.jpg';
import github from './github-box.png';
import mail from './sharp-email-24px.svg';
import linkedin from './linkedin-box.png'
import HeadlineComponent from './HeadlineComponent';
import NameComponent from './NameComponent';
import ContactInfoComponent from './ContactInfoComponent';
import ButtonComponent from './ButtonComponent';

class App extends React.Component {
  
   
  public render() {
    return (
      <div className="App">
        <div className="App-header">
            <div className="Image-text-buttons-container">
                <div className="Picture-container">
                    <img src={profile} className="Picture"/>
                </div>
                <div className="Name-container">
                  <NameComponent text="CRISTIAN"/>
                  <NameComponent text="OSORIO BRETTI"/>
                </div>
              
                <div className={"Buttons no-print"}>
                    <ButtonComponent link="https://github.com/cristianbretti" icon={github}/>
                    <a href="mailto:cristian.osoriobretti@gmail.com">
                      <img src={mail}/>
                    </a>
                    <a href="https://www.linkedin.com/in/cristian-osorio-bretti-904270106/">
                      <img className="Icon" src={linkedin}/>
                    </a>
                </div>
            </div>
            <div className="Contact-info">
                <ContactInfoComponent text="www.osoriobretti.com"/>
                <ContactInfoComponent text="cristian.osoriobretti@gmail.com"/>
                <ContactInfoComponent text="(+46)70 782 6560"/>
                <ContactInfoComponent text="Slottsvägen 3, 183 52, Täby"/>
            </div>     
        </div>
        <div className="App-body">
          <div className={'Section'} >
            <h2 className={"Info-text no-print"}>
              Hi! I'm Cristian, a student at KTH and app developer at WeKnowIT. 
              I enjoy exploring new things, testing new technologies and improvining my knowledge in the world of computer science, machine learning and software development.
            </h2>
          </div>
          <div className={'Section Right-section'}>
            <HeadlineComponent text="WORK EXPERIENCE"/>
            <WorkComponent name="WeKnowIT" time="Mars 2018- present" position="App developer" text="Developing customized apps for customers with React Native. Resposible for planning, building and delivering the entire product"/>
            <WorkComponent name="Topgolf Sweden" time="May 2017 - August 2017" position="Software developer" text="Built a Windows application with C# and WPF"/>
          </div>
          <div className={'Section Left-section'}>
            <HeadlineComponent text="EDUCATION"/>
            <EducationComponent name="KTH - Royal Institute of Technology" time="August 2015 - present" text="Pursuing a M.Sc in Computer Science with a specialization in machine learning"/>
            <EducationComponent name="Åva gymnasium" time="August 2012 - June 2015" text="Technology program"/>
          </div>
          <div className={'Section Right-section'}>
            <HeadlineComponent text="VOLUNTEER EXPERIENCE"/>
            <VolunteerComponent name="Head of reception" time="January 2018 - December 2018" text="Head of the reception of new students at the computer science chapter. Lead a team of 60 students to organize 5 weeks of events for 200 people"/>
            <VolunteerComponent name="Group leader" time="January 2017 - December 2017" text="Lead a group of 26 students that worked with the reception"/>
          </div>
          <div className={'Section Left-section'}>
            <HeadlineComponent text="SKILLS"/>
            <p className={"Content Skills"}>Javascript, HTML, CSS, React, React Native, Redux, C#, WPF, Java, Python, Git, SQL, Bash</p>
          </div>
          <div className="Section">
            <button className={"Download-button no-print"} onClick={() => window.print()}>Download résumé</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
