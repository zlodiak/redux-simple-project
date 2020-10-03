import {connect} from "react-redux";
import { setAppTextCreator } from '../../redux/appReducer';

import Page1 from './Page1';

const mapStateToProps = state => {
  return {
    text: state.appReducer.appText,
    presentText: state.presentText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setValue: value => {
      const action = setAppTextCreator(value);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page1);
