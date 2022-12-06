import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,

    manOfTheMatch,

    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails
  return (
    <div className="latest-match-details-card-container">
      <div className="opponent-team-name-match-date-venue-result-opponent-logo-container">
        <div className="opponent-team-name-match-date-venue-result">
          <p className="opponent-team-name">{competingTeam}</p>
          <p className="match-date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          className="opponent-logo"
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="match-summary-details-container">
        <p className="question-field">First Innings</p>
        <p className="answer-field">{firstInnings}</p>
        <p className="question-field">Second Innings</p>
        <p className="answer-field">{secondInnings}</p>
        <p className="question-field">Man Of the Match</p>
        <p className="answer-field">{manOfTheMatch}</p>
        <p className="question-field">Umpires</p>
        <p className="answer-field">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
