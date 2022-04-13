// import Cookies from 'vue-cookies'
// import Config from '/setting'
import { getAuthInfo } from '@/api/user'

const has = function() {
	return JSON.parse(localStorage.getItem('auth')) ? true : false;
};

const get = function(key) {
	const data = JSON.parse(localStorage.getItem('auth'));
	if (data) {
		return key ? data[key] : data;
	}else {
		return null;
	}
};

const clear = function() {
	localStorage.removeItem('auth');
};

const update = async function(data) {
	if (data) {
		localStorage.setItem('auth', JSON.stringify(data));
		return;
	}
	await getAuthInfo().then(res => {
		localStorage.setItem('auth', JSON.stringify({token: get('token'), user: res}));
	}).catch(() => {
		clear();
	});
}

const auth = async function() {
	await update();
	return ~~get('user')?.['lv'];
}

// /**
//  * Auth 构造函数
//  * @param {object} user 用户
//  * @param {string} token token
//  * @returns object
//  */
// class Auth {
// 	constructor(user, token) {
// 		this.user = user;
// 		this.token = token;
// 	}
// }

// /**
//  * 设置 Auth
//  * @param {object} user 用户
//  * @param {string} token token
//  */
// function setAuth(...args) {
// 	// const expires = Config.tokenExpires * 24 + 8 + 'h';
// 	if (args.length === 1) {
// 		if (typeof(args[0]) === 'string') {
// 			localStorage.setItem('auth', JSON.stringify(new Auth(getUser(), args[0])));
// 		}
// 		if (typeof(args[0]) === 'object') {
// 			localStorage.setItem('auth', JSON.stringify(new Auth(args[0], getToken())));
// 		}
// 	}else {
// 		localStorage.setItem('auth', JSON.stringify(new Auth(args[0], args[1])));
// 	}
// }

// /**
//  * 移除 Auth
//  */
// function removeAuth() {
// 	localStorage.removeItem('auth');
// }

// /**
//  * 是否登录
//  * @returns boolean
//  */
// function isLogged() {
// 	return localStorage.getItem('auth');
// }

// /**
//  * 获取权限
//  */
// async function getAuth() {
// 	const res = await getAuthInfo().then(r => {
// 		return parseInt(r.lv);
// 	}).catch(() => {
// 		return 0;
// 	});
// 	return res;
// }

// /**
//  * 获取 token
//  * @returns string
//  */
// function getToken() {
// 	const auth = JSON.parse(localStorage.getItem('auth'));
// 	return auth?.token;
// }

// /**
//  * 获取已登录用户
//  * @returns object
//  */
// function getUser() {
// 	const auth = JSON.parse(localStorage.getItem('auth'));
// 	return auth?.user;
// }

/**
 * 声明工具类对象
 */
const authUtils = {
	has,
	get,
	clear,
	update,
	auth,
}

export default authUtils;