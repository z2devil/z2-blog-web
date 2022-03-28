export default function throttle(fn, wait = 200) {
	let pre = Date.now();
	return function () {
		let context = this;
		let args = arguments;
		let now = Date.now();
		if (now - pre >= wait) {
			fn.apply(context, args);
			pre = Date.now();
		}
	}
}
