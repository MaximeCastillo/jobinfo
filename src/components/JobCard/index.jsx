import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ jobs }) => {
  console.log(`JOBS : ${jobs}`)
  const cards = "Tapez dans la barre de recherche";
  if (jobs !== null) {
    jobs.map((job) => {
      return (
        <li>
          <Link to={job.normalized_job_title} key={job.uuid}>
            {job.suggestion}
          </Link>
        </li>
      );
    })}
  

	return (
		<nav>
			<ul>
        {cards}
			</ul>
		</nav>
	);
}

export default JobCard;