import React from "react";

const JobCard = ({ jobData }) => {
  const { title, company, location, salary, tags, link, applied } = jobData;

  return (
    <div className="job-card">
      <h2>{title}</h2>
      <p>Company: {company}</p>
      <p>Location: {location}</p>
      <p>Salary: {salary}</p>
      {/* <p>Tags: {tags.join(', ')}</p> */}
      <a href={link}>Apply</a>
      <label>
        <input type="checkbox" checked={applied} />
        Applied
      </label>
    </div>
  );
};

export default JobCard;
