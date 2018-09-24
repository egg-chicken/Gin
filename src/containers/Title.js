import { connect } from 'react-redux';
import Title from "../components/Title";

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => console.log("click")
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Title);