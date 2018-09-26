import { connect } from 'react-redux'
import Invite from "../components/Invite"
import { selectInviteCharacter } from "../actions"

const mapStateToProps = (state) => {
  return {
    characters: state.inviteCharacters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => dispatch(selectInviteCharacter(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invite);
