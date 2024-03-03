import { Dialogs } from './Dialogs';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        addMessageActionCreator: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageActionCreator: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToprops) (Dialogs)