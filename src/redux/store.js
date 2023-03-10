import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import signInSaga from './SignIn/saga';
import homeSaga from './Home/saga';
import conversationSaga from './Conversation/saga';
import chatRoomSaga from './ChatRoom/saga';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
}
  , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(signInSaga);
sagaMiddleware.run(homeSaga);
sagaMiddleware.run(conversationSaga);
sagaMiddleware.run(chatRoomSaga);