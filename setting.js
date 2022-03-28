module.exports = {

	title: '中二Devil的个人博客',
	
    /**
     * @description 记住密码状态下的token在Cookie中存储的天数
     */
	tokenExpires: 30,
	
	/**
	 * @description 请求超时时间，毫秒（默认30秒）
	 */
	timeout: 30000,

	/**
	 * @description 后端接口地址
	 */
	baseURL: 'https://z2devil.cn/api',
	// baseURL: 'http://localhost:8000/api',
	
	/**
	 * @description 后端下载/查看文件接口地址
	 */
	downloadUrl: 'https://z2devil-bucket.oss-cn-beijing.aliyuncs.com/',
	
	/**
	 * 请求体数据类型
	 */
	contentType: 'application/json',

	/**
	 * oss 相关 
	 */
	oss_accessid: 'LTAI5tSfHizt7iAEjigoefXg',
	oss_endpoint: 'oss-cn-beijing.aliyuncs.com',
	oss_bucket: 'z2devil-bucket',
	oss_root: 'blog/',

	/**
	 * 上传图片最大大小（15MB）
	 */
	maxImageSize: 15 * 1024 * 1024,

}
