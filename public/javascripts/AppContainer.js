import { connect } from 'react-redux';
import { addRow, updateRow, savePage, loadPage } from './action-creators';
import AppComponent from './AppComponent';

const mapStateToProps = (state) => {
	return {
		rows: state.rows,
		pages: state.pages
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addRow: () => dispatch(addRow()),
		updateRow: (i, value) => dispatch(updateRow(i, value)),
		savePage: (newPage) => dispatch(savePage(newPage)),
		loadPage: (pageName) => dispatch(loadPage(pageName))
	};
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = componentCreator(AppComponent);
export default AppContainer;