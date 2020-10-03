import {connect} from "react-redux";
import { setAppTextCreator } from '../../redux/appReducer';

import Page1 from './Page1';

const mapStateToProps = state => {
  return {
    text: state.appReducer.appText,
    presentText: state.presentText
  }
}

export default connect(mapStateToProps, { setAppTextCreator })(Page1);
