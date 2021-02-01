import React, { useContext } from "react";

import { ResumeDetailsContext } from "contextAPI/ResumeDetailsContext";

const Resume = () => {
  const [resumeDetail] = useContext(ResumeDetailsContext);

  const {
    basicInfo: { firstname, lastname, jobtitle },
    summary: { professionalSummary },
    skills: { skills },
    work: { workExperiences },
    contact: { city, email, state, website },
  } = resumeDetail;

  return (
    <div className="resume-content">
      <div className="resume-col-1">
        <h2>
          {firstname || "Firstname"} {lastname || "Lastname"}
        </h2>
        <p className="resume-job-title">{jobtitle || "Your job title"}</p>
        <p className="resume-summary">
          {professionalSummary ||
            `a powerful summary to describe your overall
          experience and skills.`}
        </p>
      </div>
      <div className="resume-col-2">
        <div>
          <span className="primary-color">
            {`${city || "City"}, ${state || "State"}`}
          </span>
        </div>
        <div>
          <span className="primary-color">{email || "Your email"}</span>
        </div>
        <div>
          <span className="primary-color">{website || ""}</span>
        </div>
      </div>

      <div className="resume-col-1">
        <h3 className="heading-row-2">EXPERIENCE</h3>
        <div>
          {!workExperiences || !workExperiences.length ? (
            <p>You haven't added any experience yet</p>
          ) : (
            workExperiences.map(
              ({
                workJobTitle,
                startDate,
                jobDescription,
                endDate,
                employer,
                currentlyWorking,
                id,
              }) => (
                <div key={id} className="resume-experiences">
                  <h4>
                    <span>{employer}</span> - {workJobTitle}
                  </h4>
                  <h6>
                    {startDate.substring(0, 4)} -{" "}
                    {currentlyWorking ? endDate : endDate.substring(0, 4)}
                  </h6>
                  <p>{jobDescription}</p>
                </div>
              )
            )
          )}
        </div>
      </div>

      <div className="resume-col-2">
        <h3 className="heading-row-2">SKILLS</h3>
        <div>
          {!skills || !skills.length ? (
            <p>You haven't added any skill yet</p>
          ) : (
            skills.map((skill) => (
              <ul key={skill} className="skill-items">
                <div className="bullets"></div>
                <li className="skill-item">{skill}</li>
              </ul>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;
