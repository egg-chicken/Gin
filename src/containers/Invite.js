import { connect } from 'react-redux'
import Invite from "../components/Invite"
import { changeInviteCharacter } from "../actions"

const mapStateToProps = (state) => {
  return {
    characterId: state.inviteCharacterId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(changeInviteCharacter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invite);