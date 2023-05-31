const ResumePage = ({ title }: { title: string }) => {
  return (
    <div className="bg-slate-50 h-full w-full">
      <div className="ml-auto mb-6 p-4 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] 3xl:w-[100%] rounded-sm">
        <div className="h-20 w-full p-1 bg-red-100 rounded-md"></div>
        {/* <div className="h-full w-2 bg-blue-200 float-left fixed z-1"></div> */}
        <div className="inline-block my-6px	ml-55px w-full h-fit p-4">
          <br />
          <h1 className="font-bold text-6xl	">Grace Durant</h1>
          <div className="font-semibold text-lg">
            Seattle, WA |
            <a href="tel:9403123425" className="text-sky-600 text-cyan-400">
              {' '}
              940-312-3425
            </a>{' '}
            |
            <a
              href="mailto:gdurant34@gmail.com"
              className="text-sky-600 text-cyan-400"
            >
              {' '}
              gdurant34@gmail.com
            </a>{' '}
            |
            <a
              href="https://www.linkedin.com/in/gracedurant/"
              className="text-sky-600 text-cyan-400"
            >
              {' '}
              LinkedIn
            </a>{' '}
            |
            <a
              href="https://github.com/gdurant34"
              className="text-sky-600 text-cyan-400"
            >
              {' '}
              Github
            </a>{' '}
            |
            <a
              href="https://medium.com/@gdurant34"
              className="text-sky-600 text-cyan-400"
            >
              {' '}
              Blog
            </a>{' '}
            |
            <a
              href="https://github.com/gdurant34/Portfolio"
              className="text-sky-600 text-cyan-400"
            >
              {' '}
              Portfolio
            </a>
          </div>
          <br />
          <h4 className="h-5 w-full z-1 py-4 font-bold">SOFTWARE ENGINEER</h4>
          <p className="py-2">
            Experience in Ruby on Rails, React, and JavaScript based programming
            with a background in software sales. Possess strong skills in
            teamwork, building a supportive and encouraging environment, while
            challenging each other to continually grow. Established track record
            for success in applying technical skills in accounting and soft
            skills in sales by creating trust quickly through strong
            communication. Excited to continue to develop my unique skill set by
            applying creativity to my problem-solving approach.
          </p>
          <h4 className="h-5 w-full z-1 py-4 font-bold">TECHNICAL SKILLS</h4>
          <p className="py-2">
            Ruby (1 year), Ruby on Rails (1 year), SQL (2 years), JavaScript (1
            year), React (1 year), CSS (1 year), Recoil, Git/Github, HTML (1
            year), ActiveRecord (1 year), Object-Oriented Programming (OOP) (1
            year), Postman, PostgresSQL, SQLite, Restful API (1 year), Tailwind
            CSS
          </p>
          <h4 className="h-5 w-full z-1 pt-4 font-bold">EXPERIENCE</h4>
          <br />
          <div>
            <p className="py-2">
              <strong>Software Advisor</strong> at{' '}
              <a
                href="https://www.softwareadvice.com/"
                className="font-bold text-sky-600 text-cyan-400"
              >
                Software Advice
              </a>
              , Austin, Texas{' '}
              <span className="float-right">06/2019 - 09/2022</span>
            </p>
            <ul>
              <li className="list-disc list-inside px-4">
                Communicated with buyers about software needs and recommended
                three to five solutions
              </li>
              <li className="list-disc list-inside px-4">
                Aided buyers looking for software in over 12 different
                industries including Medical, ERP, and Project Management
              </li>
              <li className="list-disc list-inside px-4">
                Outperformed the ERP team by 50% in revenue generated and the
                number of buyers helped
              </li>
              <li className="list-disc list-inside px-4">
                Regularly achieved top-five ranks from the internal QA
                department for quality B2B communication
              </li>
            </ul>
            <p className="py-2">
              <strong>Accountant</strong> at
              <a
                href="https://improving.com/"
                className="font-bold text-sky-600 text-cyan-400 pl-1"
              >
                Improving
              </a>
              , Dallas, Texas{' '}
              <span className="float-right">04/2016 - 12/2018</span>
            </p>
            <ul className="list-disc list-inside px-4">
              <li>
                Managed the Columbus, Ohio entity of over 100 employees,
                accounting remotely
              </li>
              <li>
                Collaborated with vendors for full A/P cycle, and sales staff,
                clients, and consultants for full A/R cycle{' '}
              </li>
              <li>
                Ran payroll, and paid payroll taxes for two entities in two
                different states and over 300 employees
              </li>
              <li>
                Partnered with leadership for monthly and yearly close, and
                created presentations on entities' performance
              </li>
            </ul>
          </div>
          <h4 className="h-5 w-full z-1 py-4 font-bold">TECHNICAL PROJECTS</h4>
          <div>
            <p className="pt-4">
              <span className="font-semibold">Financial Goals</span> -
              <a
                href="https://github.com/gdurant34/financial_goals_phase_2_project"
                className="text-sky-600 text-cyan-400"
              >
                {' '}
                Github
              </a>{' '}
              |
              <a
                href="https://www.youtube.com/watch?v=SM_UWHfj3_8&t=3s"
                className="text-sky-600 text-cyan-400"
              >
                {' '}
                Demo
              </a>
            </p>
            <p className="italic">
              An app to empower users' financial decisions by providing a system
              to enter account balances, track transactions, and create
              financial goals.
            </p>
            <ul className="list-disc list-inside px-4">
              <li>
                Programmed a single-page web application with streamlined
                navigation for a seamless user experience by applying
                fundamental React and React Router patterns
              </li>
              <li>
                Developed a lightweight interactive interface to increase user
                motivation and engagement by employing intuitive data
                visualization techniques for goal progress representation
              </li>
              <li>
                Researched solutions to ensure accurate floating-point
                calculations resulting in improved accuracy and reliability by
                implementing an external 3rd party library
              </li>
              <li>
                Leveraged Chrome/React Devtools and strategic console statements
                to monitor app state and methodically debug errors, leading to
                improved stability by{' '}
              </li>
            </ul>
            <p className="pt-4">
              <span className="font-semibold">Movie Social</span> -
              <a
                href="https://github.com/gdurant34/project-movie-social"
                className="text-sky-600 text-cyan-400"
              >
                {' '}
                Github Front-end
              </a>{' '}
              |
              <a
                href="https://github.com/gdurant34/phase-3-movie-social"
                className="text-sky-600 text-cyan-400"
              >
                {' '}
                Github Back-end
              </a>{' '}
              |
              <a
                href="https://www.youtube.com/watch?v=LZ0wNL8z3N4&t=1s"
                className="text-sky-600 text-cyan-400"
              >
                {' '}
                Demo
              </a>
            </p>
            <p className="italic">
              A movie library app with search functionality, enabling users to
              save, rate, and review films.{' '}
            </p>
            <ul className="list-disc list-inside px-4">
              <li>
                Integrated RESTful API featuring ~500,000 movies and TV shows
                searchable by partial title{' '}
              </li>
              <li>
                Implemented Semantic-UI React, providing a quick solution for
                consistent design to expedite development time
              </li>
              <li>
                Incorporated full CRUD capabilities in a lightweight Sinatra
                back-end to handle frontend requests for data
              </li>
            </ul>
            <p className="pt-4">
              <span className="font-semibold">It’s a Date</span> -
              <a
                href="https://github.com/gdurant34/phase-5-project-its-a-date"
                className="text-sky-600 text-cyan-400"
              >
                {' '}
                Github
              </a>{' '}
              |
              <a
                href="https://www.youtube.com/watch?v=SZPFzpYK7As&t=1s"
                className="text-sky-600 text-cyan-400"
              >
                {' '}
                Demo
              </a>
            </p>
            <p className="italic">
              An app for users to create and store fun activities to turn into
              date nights.{' '}
            </p>
            <ul className="list-disc list-inside px-4">
              <li>
                Optimized React app with Recoil by reducing dependencies between
                components
              </li>
              <li>
                Built back-end with full CRUD capabilities and validations in
                Ruby on Rails{' '}
              </li>
              <li>
                Employed Bcrypt hashing on the back-end and authentication
                routes on the front-end to ensure user privacy{' '}
              </li>
            </ul>
          </div>
          <h4 className="h-5 w-full z-1 py-4 font-bold">EDUCATION</h4>
          <p className="pt-4">
            <a
              href="https://flatironschool.com/award-winning/"
              className="font-bold text-sky-600 text-cyan-400 pl-1"
            >
              Flatiron School
            </a>
            , Online <span className="float-right">09/2022 - 01/2023</span>
          </p>
          <ul className="list-disc list-inside px-4">
            <li>
              Full Stack Web Development, Ruby on Rails, and JavaScript/React
              program{' '}
            </li>
          </ul>
          <p className="pt-4">
            <a
              href="https://www.unt.edu/"
              className="font-bold text-sky-600 text-cyan-400 pl-1"
            >
              The University of North Texas
            </a>
            , Denton, Texas <span className="float-right">12/2016</span>
          </p>
          <ul className="list-disc list-inside px-4">
            <li>
              Integrated Accounting Program: Bachelor of Science, Masters of
              Science in Accounting/Taxation
            </li>
          </ul>
        </div>
        {/* <div className="h-full w-2 bg-blue-200 float-right inherit"></div> */}
        <div className="h-10 w-full p-1 bg-red-100 rounded-md relative clear-both font-mono">
          <div className="font-mono float-right mr-5">Grace</div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
