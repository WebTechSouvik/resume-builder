import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  updateProfilePicture,
  updateUserDetails,
  userDetails,
  userLoggin,
  userRegister,
} from "../../utils/userApi";
import { FaLess } from "react-icons/fa6";
import { act } from "react";

export const userRegisterThunk = createAsyncThunk(
  "userRegisterThunk",
  async (userInfo) => {
    try {
      return await userRegister(userInfo);
    } catch (err) {
      console.log(err);
      throw new Error(err.response.data.message);
    }
  },
);

export const userLogginThunk = createAsyncThunk(
  "userLogginThunk",
  async (userInfo) => {
    try {
      return await userLoggin(userInfo);
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  },
);

export const userDetalisThunk = createAsyncThunk(
  "userDetalisThunk",
  async () => {
    try {
      return await userDetails();
    } catch (err) {
      console.log(err);
      throw new Error(err.response.data.message);
    }
  },
);

export const updateUserDetalisThunk = createAsyncThunk(
  "updateUserDetalisThunk",
  async (updateInfo) => {
    try {
      return await updateUserDetails(updateInfo);
    } catch (err) {
      console.log(err);
      throw new Error(err.response.data.message);
    }
  },
);

export const updateProfilePictureThunk = createAsyncThunk(
  "updateProfilePictureThunk",
  async (avtar) => {
    try {
      return await updateProfilePicture(avtar);
    } catch (err) {
      console.log(err);
      throw new Error(err.response.data.message);
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    imageLoading:false,
    userInfoLoading:false,
    isAthinticate: false,
    user: null,
    error: null,
    message: null,
  },
  reducers: {
    clearMessage: (state, action) => {
      state.message = null;
    },
    clearError: (state, action) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegisterThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(userRegisterThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(userRegisterThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(userLogginThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(userLogginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.isAthinticate = true;
        state.message = action.payload.message;
      })
      .addCase(userLogginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(userDetalisThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(userDetalisThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.isAthinticate = true;
        state.user = action.payload.userData;
      })
      .addCase(userDetalisThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUserDetalisThunk.pending, (state, action) => {
        state.userInfoLoading = true;
      })
      .addCase(updateUserDetalisThunk.fulfilled, (state, action) => {
        state.userInfoLoading = false;
        state.message = action.payload.message;
        state.user = action.payload.uesrInfo;
      })
      .addCase(updateUserDetalisThunk.rejected, (state, action) => {
        state.userInfoLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateProfilePictureThunk.pending, (state, action) => {
        state.imageLoading = true;
      })
      .addCase(updateProfilePictureThunk.fulfilled, (state, action) => {
        state.imageLoading = false;
        state.message = action.payload.message;
        state.user.avtar = action.payload.avtart_url;
      })
      .addCase(updateProfilePictureThunk.rejected, (state, action) => {
        state.imageLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearMessage, clearError } = userSlice.actions;
export default userSlice.reducer;
