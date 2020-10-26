import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ jobs }) => {
	const cards = jobs.map((job) => {
		return (
			<li>
				<Link to={job.url} key={job.url}>
					{job.name}
				</Link>
			</li>
		);
	})

	return (
		<nav>
			<ul>
				{cards}
			</ul>
		</nav>
	);
}

export default JobCard;