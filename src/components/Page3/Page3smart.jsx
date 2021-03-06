import { connect } from "react-redux";
import { setMessageCreator } from '../../redux/messagesReducer';

import Page3 from './Page3';

const mapStateToProps = state => {
  return {
    messages: state.messagesReducer.messages,
    genders: ['male', 'female'],
  }
}

export default connect(mapStateToProps, { setMessageCreator })(Page3);
