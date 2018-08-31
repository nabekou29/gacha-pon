import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from '../../component/Create/Create';
import * as Actions from './../../actions/create';

const mapStateToProps = state => state.Create;

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
