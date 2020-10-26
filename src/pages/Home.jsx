import React, { useEffect, useState } from "react";
import JobCard from '../components/JobCard'


const Home = () => {
	const [searchInput, setSearchInput] = useState("");
	// const searchedText = "web"; //Pour tester avant de faire la SearchBar
  const url = `http://api.dataatwork.org/v1/jobs/autocomplete?contains=${searchInput}`;


  const fetchJobs = () => {
		fetch(url)
      .then((response) => response.json())
      .then((data) => {
          console.log("DATA :",data)
					return data 
			})
      .catch((error) => console.log(error))

      // PAS DE RETURN
  
}

	const handleChange = (event) => {
		setSearchInput(event.target.value)
		console.log(`SearchInput : ${searchInput}`)
	}

	const searchJobs = () => {
		if (searchInput.length > 2) {
			const jobs = fetchJobs(); //Il faudrait attendre l'API avant de passer à la ligne suivante
			console.log("searchJobs", jobs); //retourne 'undefined'
			return jobs;
		}
		return null;
	}

	return (
		<div>
			<h1>Home</h1>
			<form>
				<label>
					Search:
          <input type="text" value={searchInput} onChange={handleChange} />
				</label>
			</form>
			<JobCard jobs={searchJobs()} />
		</div>
	);



};

export default Home;