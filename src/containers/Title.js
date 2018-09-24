import { connect } from 'react-redux'
import Title from "../components/Title"
import { changePage } from "../actions"

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(changePage("Invite"))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Title);