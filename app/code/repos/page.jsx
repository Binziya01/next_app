import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"

async function fetchRepos() {
  const response = await fetch('https://api.github.com/users/bradtraversy/repos', {
    next: {
      revalidate: 60
    }
  });

  await new Promise((resolve) => setTimeout(resolve,1000))  // wait 1 second
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {

  const repos = await fetchRepos();
  

  return (
    <div className="repos-container">
    <h2 className="text-xl font-extrabold">Repositories</h2>
    <div className="pt-8">
    <ul className="repos-list flex flex-col gap-8">
      {repos.map((repo) => (
        <li key={repo.id}>
          <Link href={`/code/repos/${repo.name}`}>
            <h3 className="font-bold text-red-600">{repo.name}</h3>
            <h3>{repo.description}</h3>
            <div className="repo-details">
              <span>
              <FaStar/> {repo.stargazers_count}
              </span>
              <span>
                <FaCodeBranch/> {repo.forks_count}
              </span>
              <span>
                <FaEye/> {repo.watchers_count}
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
    </div>
      
    </div>
  )
}

export default ReposPage