import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: [],
    recentMatchesDetails: [],
    teamBannerUrl: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  getFormattedMatchData = teamMatchDetails => ({
    competingTeam: teamMatchDetails.competing_team,
    competingTeamLogo: teamMatchDetails.competing_team_logo,
    date: teamMatchDetails.date,
    firstInnings: teamMatchDetails.first_innings,
    id: teamMatchDetails.id,
    manOfTheMatch: teamMatchDetails.man_of_the_match,
    matchStatus: teamMatchDetails.match_status,
    result: teamMatchDetails.result,
    secondInnings: teamMatchDetails.second_innings,
    umpires: teamMatchDetails.umpires,
    venue: teamMatchDetails.venue,
  })

  getTeamMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const responseData = await response.json()
    console.log(responseData)

    const formattedLatestMatchData = this.getFormattedMatchData(
      responseData.latest_match_details,
    )
    const formattedRecentMatchesDetails = responseData.recent_matches.map(
      eachMatch => this.getFormattedMatchData(eachMatch),
    )

    this.setState({
      latestMatchDetails: formattedLatestMatchData,
      recentMatchesDetails: formattedRecentMatchesDetails,
      teamBannerUrl: responseData.team_banner_url,
      isLoading: false,
    })
  }

  renderTeamMatches = () => {
    const {latestMatchDetails, recentMatchesDetails, teamBannerUrl} = this.state
    console.log(recentMatchesDetails)
    return (
      <div className="team-matches-component-home-page">
        <img src={teamBannerUrl} className="team-banner" alt="team banner" />
        <p className="latest-matches-text">Latest Matches</p>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="recent-matches-list-container">
          {recentMatchesDetails.map(eachMatch => (
            <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const {isLoading} = this.state
    return (
      <div className={`extra-team-matches-home-page-container ${id}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
