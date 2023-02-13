import {
    // get,
    post,
    // dele,
} from '@/utils/request';

import { pureRequest } from '@/utils/request';

/**
 * 预请求
 * @returns
 */
export function pre() {
    return post('/file/pre');
}

/**
 * 新增文件
 * @returns
 */
export function add(params) {
    return post('/file', params);
}

/**
 * oss直传
 * @returns
 */
export function upload(params, callback) {
    const fileType = params.file.type.substring(
        0,
        params.file.type.indexOf('/') + 1
    );
    const formdata = new FormData();
    formdata.append('policy', params.policy);
    formdata.append('Signature', params.signature);
    formdata.append('OSSAccessKeyId', process.env.VUE_APP_OSS_ID);
    formdata.append(
        'key',
        process.env.VUE_APP_OSS_ROOT + fileType + '${filename}'
    );
    formdata.append('id', params.id);
    formdata.append('name', params.file.name);
    formdata.append(
        'file',
        params.file,
        params.name ? params.name : params.file.name
    );
    formdata.append('success_action_status', '200');
    const host = `https://${process.env.VUE_APP_OSS_BUCKET}.${process.env.VUE_APP_OSS_ENDPOINT}`;
    // const expireEnd = Date.parse(new Date()) + 30*24*60*60*1000;
    // params.expire = new Date(expireEnd).getDay;
    let req = pureRequest({ timeout: 0 });
    req.interceptors.request.use(config => {
        config.headers['Content-Type'] = 'multipart/form-data;';
        config.onUploadProgress = function (e) {
            // const fileId =
            //     typeof config.data == 'object' ? config.data.get('id') : 0;
            // e.id = fileId;
            if (callback) callback(e);
        };
        return config;
    });
    return req.post(host, formdata);
}
