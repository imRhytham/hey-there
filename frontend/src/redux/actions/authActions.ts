import * as types from './../Types';
import axios from 'axios';
import { API_URI } from '../../common/common';

const setAuthLoader = (payLoad: Boolean) => {
	return {
		type: types.SET_AUTH_LOADER,
		payload: payLoad,
	};
};

const setAuthError = (payLoad: String) => {
	return {
		type: types.SET_AUTH_ERROR,
		payload: payLoad,
	};
};

export const login = (payLoad: Object) => async (dispatch: any) => {
	setAuthLoader(true);
	try {
		const { data } = await axios.post(`${API_URI}/user/login`, payLoad, {});
		sessionStorage.setItem('user', JSON.stringify(data));
		sessionStorage.setItem('token', data.token);
		dispatch({
			type: types.LOGIN,
			payload: data,
		});
	} catch (error: any) {
		dispatch(setAuthError(error.response.data.message));
	} finally {
		dispatch(setAuthLoader(false));
	}
};

export const register = (payLoad: Object) => async (dispatch: any) => {
	setAuthLoader(true);
	try {
		const { data } = await axios.post(`${API_URI}/user/register`, payLoad);
		dispatch({
			type: types.LOGIN,
			payload: data,
		});
		sessionStorage.setItem('user', JSON.stringify(data));
		sessionStorage.setItem('token', data.token);
	} catch (error: any) {
		dispatch(setAuthError(error.response.data.msg));
	} finally {
		dispatch(setAuthLoader(false));
	}
};

export const logout = () => {
	sessionStorage.removeItem('user');
	sessionStorage.removeItem('token');
	window.location.reload();
	return {
		type: types.LOGOUT,
	};
};
