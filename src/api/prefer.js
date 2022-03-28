import {
    post
} from '@/utils/request';

/**
 * 喜欢
 */
export function like(wCate, wId) {
    let data = {
        'wcate': wCate,
        'wid': wId
    };
    return post('/prefer', data);
}