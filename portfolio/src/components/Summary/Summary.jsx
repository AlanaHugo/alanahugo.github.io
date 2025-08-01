//Summary is near the top of the page and
// is styled via Summary.css

//Summary statement

import "./Summary.css";

function DeveloperSummary() {
  return (
    <div className="SummaryDiv">
      
      <p>
        <strong>Hey! I'm Alana.</strong> <br/>With nearly 10 years experience in IT project and product delivery, I
        have developed strong skills in problem solving, requirements analysis,
        and technical communication. I have recently completed a UTS-accredited
        Certificate in Software Engineering, where I gained hands-on experience
        in designing and building software solutions.
      </p>
      <p>
        {" "}
        Now shifting into a developer role, I am excited to contribute to a team
        where I can deepen my knowledge across a range of tools and
        technologies. <br />I bring a strong focus on detail, a user-first
        mindset, and a practical approach to problem-solving.
      </p>
    </div>
  );
}

export default DeveloperSummary;
