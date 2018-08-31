import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from '../../component/Search/Search';
import * as Actions from './../../actions/search';

const mapStateToProps = state => state.Search;

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
