import { combineReducers } from '@reduxjs/toolkit';
import userSlice from '../features/userSlice';
import useTasks from '../features/taskSlice'

const store = combineReducers({
    user:userSlice,
    tasks: useTasks
});

export default store
