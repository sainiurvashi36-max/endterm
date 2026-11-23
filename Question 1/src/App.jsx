import { useState } from 'react'
import './App.css'

function App() {
  const [following, setFollowing] = useState(false)

  const skills = ['HTML', 'CSS', 'JavaScript', 'Git']
  const followers = following ? 121 : 120

  return (
    <div className="card">
      <div className="banner"></div>
      <div className="avatar">AK</div>

      <h2>Arjun Kumar</h2>
      <p className="role">Web Developer</p>

      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <p className="followers">{followers} followers</p>

      <button
        className={`follow-btn ${following ? 'following' : ''}`}
        onClick={() => setFollowing(!following)}
      >
        {following ? 'Following' : 'Follow'}
      </button>
    </div>
  )
}

export default App