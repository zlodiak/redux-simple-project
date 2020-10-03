import {connect} from "react-redux";

import Page2 from './Page2';

const mapStateToProps = state => {
  return {
    text: state.appReducer.appText,
  }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
