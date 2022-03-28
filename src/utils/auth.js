import Cookies from 'vue-cookies'
import Config from '/setting'

/**
 * Auth 构造函数
 * @param {object} user 用户
 * @param {string} token token
 * @returns object
 */
function Auth(user, token) {
	return {
		'user': user,
		'token': token,
	}
}

/**
 * 设置 Auth
 * @param {object} user 用户
 * @param {string} token token
 */
function setAuth(...args) {
	let expires = Config.tokenExpires * 24 + 8 + 'h';
	if (args.length == 1) {
		if (typeof(args[0]) == 'string') {
			Cookies.set('auth', Auth(getUser(), args[0]), expires);
		}
		if (typeof(args[0]) == 'object') {
			Cookies.set('auth', Auth(args[0], getToken()), expires);
		}
	}else {
		Cookies.set('auth', Auth(args[0], args[1]), expires);
	}
}

/**
 * 移除 Auth
 */
function removeAuth() {
	Cookies.remove('auth');
}

/**
 * 是否登录
 * @returns boolean
 */
function isLogged() {
	return Cookies.get('auth') ? true : false;
}

/**
 * 获取 token
 * @returns string
 */
function getToken() {
	let auth = Cookies.get('auth');
	return auth ? auth.token : null;
}

/**
 * 获取已登录用户
 * @returns object
 */
function getUser() {
	let auth = Cookies.get('auth');
	return auth ? Cookies.get('auth').user : null;
}

/**
 * 声明工具类对象
 */
const authUtils = {
	set: setAuth,
	remove: removeAuth,
	has: isLogged,
	token: getToken,
	user: getUser,
}

export default authUtils;