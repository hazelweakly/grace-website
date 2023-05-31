const ResumePage = ({ title }: { title: string }) => {
  return (
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div id="header"></div>
      <div className="left"></div>
      <div className="stuff">
        <br/>
        <h1>Grace Durant</h1>
        <h4>Seattle, WA | 940-312-3425 | gdurant34@gmail.com | LinkedIn | Github | Blog | Portfolio</h4>
        <br/>
        <p className="head">SOFTWARE ENGINEER</p>
        <p>Experience in Ruby on Rails, React, and JavaScript based programming with a background in software sales. Possess strong skills in teamwork, building a supportive and encouraging environment, while challenging each other to continually grow. Established track record for success in applying technical skills in accounting and soft skills in sales by creating trust quickly through strong communication. Excited to continue to develop my unique skill set by applying creativity to my problem-solving approach. </p>
        <p className="head">TECHNICAL SKILLS</p>
        <p>Ruby (1 year), Ruby on Rails (1 year), SQL (2 years), JavaScript (1 year), React (1 year), CSS (1 year), Recoil, Git/Github, HTML (1 year), ActiveRecord (1 year), Object-Oriented Programming (OOP) (1 year), Postman, PostgresSQL, SQLite, Restful API (1 year), Tailwind CSS</p>
        <p className="head">EXPERIENCE</p>
        <br/>
        <p><strong>Software Advisor</strong> at <strong>Software Advice</strong>, Austin, Texas <span>06/2019 - 09/2022</span></p>
        <ul>
          <a href="https://www.softwareadvice.com/?utm_source=google-search&utm_medium=ppc&utm_term=software%20advice&utm_matchtype=e&network=g&adpos=&ad=585527242977&sitelink=&location=9033322&gclsrc=aw.ds&&targetid=kwd-304938566311&utm_source=google-search&utm_medium=ppc&utm_term=software%20advice&utm_matchtype=e&network=g&device=c&adpos=&ad=585527242977&sitelink=&location=9033322&targetid=kwd-304938566311&campaign=16445941149&adgroup=136837529711&utm_campaign=:1:SA:2:COM:3:ENG:4:US:5:BAU:6:SOF:8:EX:10:Brand&gad=1&gclid=CjwKCAjwvdajBhBEEiwAeMh1Ux9WUcB-_NMiLadj3Op-Hz1uhKPAhLFkdxa-NLj8SLWaGMcSkJ_FSxoCapQQAvD_BwE"/>
          <li>Communicated with buyers about software needs and recommended three to five solutions</li>
          <li>Aided buyers looking for software in over 12 different industries including Medical, ERP, and Project Management</li>
          <li>Outperformed the ERP team by 50% in revenue generated and the number of buyers helped</li>
          <li>Regularly achieved top-five ranks from the internal QA department for quality B2B communication</li>
        </ul>
        <p><strong>Accountant</strong> at <strong>Improving</strong>, Dallas, Texas <span>04/2016 - 12/2018</span></p>
        <ul>
          <a href="https://improving.com/"/>
          <li>Managed the Columbus, Ohio entity of over 100 employees, accounting remotely</li>
          <li>Collaborated with vendors for full A/P cycle, and sales staff, clients, and consultants for full A/R cycle </li>
          <li>Ran payroll, and paid payroll taxes for two entities in two different states and over 300 employees</li>
          <li>Partnered with leadership for monthly and yearly close, and created presentations on entities' performance</li>
        </ul>
        <p className="head">TECHNICAL PROJECTS</p>
        <p>Financial Goals - Github | Demo</p>
        <p>An app to empower users' financial decisions by providing a system to enter account balances, track transactions, and create financial goals.</p>
        <ul>
          <li>Programmed a single-page web application with streamlined navigation for a seamless user experience by applying fundamental React and React Router patterns</li>
          <li>Developed a lightweight interactive interface to increase user motivation and engagement by employing intuitive data visualization techniques for goal progress representation</li>
          <li>Researched solutions to ensure accurate floating-point calculations resulting in improved accuracy and reliability by implementing an external 3rd party library</li>
          <li>Leveraged Chrome/React Devtools and strategic console statements to monitor app state and methodically debug errors, leading to improved stability by </li>
        </ul>
        <p>Movie Social - Github Front-end | Github Back-end | Demo</p>
        <p>A movie library app with search functionality, enabling users to save, rate, and review films. </p>
        <ul>
          <li>Integrated RESTful API featuring ~500,000 movies and TV shows searchable by partial title </li>
          <li>Implemented Semantic-UI React, providing a quick solution for consistent design to expedite development time</li>
          <li>Incorporated full CRUD capabilities in a lightweight Sinatra back-end to handle frontend requests for data</li>
        </ul>
        <p>It’s a Date - Github | Demo</p>
        <p>An app for users to create and store fun activities to turn into date nights. </p>
        <ul>
          <li>Optimized React app with Recoil by reducing dependencies between components</li>
          <li>Built back-end with full CRUD capabilities and validations in Ruby on Rails </li>
          <li>Employed Bcrypt hashing on the back-end and authentication routes on the front-end to ensure user privacy </li>
        </ul>
        <p className="head">EDUCATION</p>
        <p><strong>Flatiron School</strong>, Online <time>09/2022 - 01/2023</time></p>
        <ul>
          <li>Full Stack Web Development, Ruby on Rails, and JavaScript/React program 							</li>
        </ul>
        <p><strong>The University of North Texas</strong>, Denton, Texas <time>12/2016</time></p>
        <ul>
          <li>Integrated Accounting Program: Bachelor of Science, Masters of Science in Accounting/Taxation</li>
        </ul>
      </div>
    <div className="right"></div>
  <div id="footer">
    <h2 id="name">Grace</h2>
  </div>
</div>
  );
};

export default ResumePage;