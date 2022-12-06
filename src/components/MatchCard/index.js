import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,

    matchStatus,
    result,
  } = matchDetails

  const matchStatusClassName =
    matchStatus === 'Won' ? 'won-status-class' : 'lost-status-class'

  return (
    <li className="previous-match-card-container">
      <img
        className="prev-match-card-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="prev-match-card-competing-team">{competingTeam}</p>
      <p className="prev-match-card-result">{result}</p>
      <p className={`prev-match-card-match-status ${matchStatusClassName}`}>
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
