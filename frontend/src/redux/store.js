import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/userSlice'
import resumeSlice from './slice/resumeSlice'

export const store=configureStore({
	reducer:{
		user:userSlice,
		resume:resumeSlice
	}
})