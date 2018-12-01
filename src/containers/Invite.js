import { connect } from 'react-redux'
import Invite from "../components/Invite"
import { inviteCharacter } from "../actions"

const mapStateToProps = (state) => {
  return {
    characters: state.inviteCharacters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (character) => dispatch(inviteCharacter(character))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invite);
