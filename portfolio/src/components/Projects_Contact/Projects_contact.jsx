import "./Projects_contact.css";

function Projects() {
  return (
    <div className="projectContact">
      <div className="projects">
        <h2>Projects</h2>
        <ul>
                    <li>
            Project 1:{" "}
            <a
              href="https://github.com/AlanaHugo/IOD-Labwork/tree/5c79a7dc34d4cf2e09838089b6bd0bd6ba661a9d/Mini%20Project%201"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Plant Finder
            </a>{" "}
            <br />
            This project demonstrates a competency in HTML and CSS concepts. This project, 
            which was part of the UTS certification completed in July 2025 uses an external API to fetch 
            plant details. Bootstrap elements were used for a cleaner UI and user 
            experience with some CSS animation just for fun. The application was executed
            with responsiveness as a key goal. 
          </li>
          <li>Project 2:{" "}
            <a
              href="https://github.com/AlanaHugo/IOD-Labwork/tree/84eccc604357dd18189b265f3682ba8d009f4119/Mini%20Project%202/MP_2/mini_project_2"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
          The Reading Nook</a>{" "}<br/>
          This project demonstrates a competency in React concepts. This project, 
            also part of the UTS certification uses an external API to fetch 
            book details. MUI elements were used to enahnce the UI and user 
            experience. The project was created within an MVC structure with clean, 
            easy to read code. 
          </li> 
          <li>Project 3:{" "}
            <a
              href="https://github.com/AlanaHugo/CatFactsMP2"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
          Cat Facts</a>{" "}<br/>
          This project demonstrates database design concepts. This project, 
            also part of the UTS certification uses an external API to fetch 
            cat facts and demonstrates effective database design CRUD operations, 
            clear API documentation using MongoDB.</li>
          <li>Project 4:{" "}
            <a
              href="https://github.com/AlanaHugo/Mettle"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
          Mettle</a>{" "}<br/>
          This project demonstrates various concepts from application design 
          through to execution. The Mettle concept includes features like an easy to use 
          eCommerce store front, password tokenisation, user authentication with protected routes.
          Mettle also features user posting, and post management. The app uses MUI components
          and follows MVC structure and well commented code. User requirements documentation, low and 
          hi-fi designs and brand specs are also included with clean well commented code.</li>
        </ul>
      </div>
      <div className="contact">
        <h2>Contact</h2>
        <p>
          You can find me on{"  "}
          <a
            href="https://www.linkedin.com/in/alana-hugo-18b653118/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          or you can drop me a line via email to alanahugo2@gmail.com.
        </p>
      </div>
    </div>
  );
}

export default Projects;
