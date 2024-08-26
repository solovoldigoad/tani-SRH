import React from 'react';
import './Home.css'; 
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const Box1 = () => {
  return (
    <div class="main-container">
    <div class="box-container">
        <h1>Welcome to Career Counseling</h1>
        <p>Your personalized career guidance platform.</p>
        <button class="submit-button">Submit</button>
    </div>
    </div>
  );
};

const Box2= () => {
  return (
    <div class="main-box">
<div class="container">
    <div class="box-wrapper">
      <div class="box">
        <h2 class="box-title">Career Assessment</h2>
        <p class="box-description">Identify your best-fit career with our world-class career assessment.</p>
      </div>
      <div class="box">
        <h2 class="box-title">Virtual Career Exploration</h2>
        <p class="box-description">Learn about the professional world with virtual resources and career libraries.</p>
      </div>
      <div class="box">
        <h2 class="box-title">College Guidance</h2>
        <p class="box-description">Get guidance on college applications, scholarships, and internships.</p>
      </div>
      <div class="box">
        <h2 class="box-title">Career Ecosystem</h2>
        <p class="box-description">Create a career guidance ecosystem in sync with New Education Policy.</p>
      </div>
      <div class="box">
        <h2 class="box-title">International Coaching</h2>
        <p class="box-description">Become an international Certified Career Coach and build your career.</p>
      </div>
      <div class="box">
        <h2 class="box-title">Assessment Platform</h2>
        <p class="box-description">Boost your career guidance practice with our assessment platform.</p>
      </div>
    </div>
  </div>
    </div>
  );
};

const cardClasses = 'bg-card rounded-lg shadow-md';
const textClasses = 'text-muted-foreground';
const primaryColorClasses = 'text-primary';
const secondaryColorClasses = 'bg-secondary text-secondary-foreground hover:bg-secondary/80';


const outerContainerStyles = {
  display: 'flex',
  justifyContent: 'center', // Center horizontally
  alignItems: 'center', // Center vertically
  border: '1px solid #ccc', // Optional: for visual reference
};

const innerContainerStyles = {
  height: '550px',
  display: 'flex',
  flexDirection: 'column', // Stack title and boxes vertically
  border: '1px solid #ddd', // Optional: for visual reference
};

const boxContainerStyles = {
  display: 'flex',
  height: 'calc(100% - 40px)', // Adjust the height for the boxes (subtract title height)
  gap: '100px', // Gap between the boxes
};

const boxStyles = {
  height: '450px', // Adjusted height for each box
  display: 'flex',
  backgroundColor: '#f9f9f9', // Optional: for visual reference
};

const titleStyles = {
  textAlign: 'center',
  marginBottom: '10px',
  fontSize: '42px',
  fontWeight: 'bold',
};

const MindlerWay = () => {
  return (
    <div style={outerContainerStyles}>
      <div style={innerContainerStyles}>
        <div style={titleStyles}>Title of the Box</div>
        <div style={boxContainerStyles}>
          <div style={{ ...boxStyles, width: '650px' }}>
          <img src="https://placehold.co/300x200" alt="Assessment Image" />
          </div>
          <div style={{ ...boxStyles, width: '450px' }}>
          <div className={`${cardClasses} p-2`} style={{ height: '450px' , width : '370px' }}>
          <h2 className="text-lg font-semibold">Advanced Assessment & Best-Fit Matches</h2>
        <p className={textClasses}>5-D psychometric career assessment: Orientation Style, Interest, Personality, Aptitude, and EQ</p>
        <p className={textClasses}>
        34-page in-depth career report with personalized development plans.{' '}
        <a href="#" className={primaryColorClasses}>
        View Sample Report
            </a>
          </p>
            <button className={`${secondaryColorClasses} mt-4 p-2 rounded`}>Take Free Demo</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MindlerWay2= () => {
  return (
    <div style={outerContainerStyles}>
      <div style={innerContainerStyles}>
        <div style={titleStyles}>Title of the Box</div>
        <div style={boxContainerStyles}>
          <div style={{ ...boxStyles, width: '450px' }}>
          <div className={`${cardClasses} p-2`} style={{ height: '450px' , width : '370px' }}>
          <h2 className="text-lg font-semibold">Advanced Assessment & Best-Fit Matches</h2>
        <p className={textClasses}>5-D psychometric career assessment: Orientation Style, Interest, Personality, Aptitude, and EQ</p>
        <p className={textClasses}>
        34-page in-depth career report with personalized development plans.{' '}
        <a href="#" className={primaryColorClasses}>
        View Sample Report
       </a>
      </p>
      <button className={`${secondaryColorClasses} mt-4 p-2 rounded`}>Take Free Demo</button>
      </div>
          </div>
          <div style={{ ...boxStyles, width: '650px' }}>
          <img src="https://placehold.co/300x200" alt="Assessment Image" />
          </div>
        </div>
      </div>
    </div>
  );
};


function Home() {
  return (
    <div>
        <Box1/>
        <Box2 />
        <MindlerWay/>
        <MindlerWay2/>
        <MindlerWay/>
        
    </div>
  );
}

export default Home;











