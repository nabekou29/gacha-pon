import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from '../../component/Gacha/Gacha';
import * as Actions from './../../actions/gacha';

const mapStateToProps = state => state.Gacha;

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
