import React, { useEffect, useState } from "react";


const Home = () => {
	const [searchInput, setSearchInput] = useState("");
	// const searchedText = "web"; //Pour tester avant de faire la SearchBar
  const url = `http://api.dataatwork.org/v1/jobs/autocomplete?contains=${searchInput}`;
  if (searchInput.length > 2) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.map(data => data[0][0].normalized_job_title);
      })
      .catch((error) => console.log(error));
  }

	const handleChange = (event) => {
		setSearchInput(event.target.value)
		console.log(`SearchInput : ${searchInput}`)
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
		</div>
	);



};

export default Home;