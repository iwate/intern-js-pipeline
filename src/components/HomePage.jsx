import React, {useState, useEffect} from 'react'; 
import RepoCard from './RepoCard.jsx';
import Title from './Title';
import { getRepos, partOfDashboard } from '../getData.js';
import config from '../../config.json';

//entire dashboard
export function HomePage() {

  console.log(config.organization)
  //list of repos to display
  const [repos, setRepos] = useState(config.repos);
  
  return (
    <div >
        <Title/>
        { repos.map(element => {
            return <RepoCard key={element} repoName={element} orgName={config.organization}/>
        })} 
      
    </div>
  );
}

export default HomePage;
