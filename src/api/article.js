import { get, post, dele, put } from '@/utils/request';

/**
 * 获取文章列表
 * @param {number} current 当前页
 * @param {number} size 每页数据量
 * @returns array
 */
export function getArticleList(params) {
    return get('/article', params);
}

/**
 * 获取文章
 */
export function getArticle(id) {
    return get('/article/' + id);
}

/**
 * 获取文章详情
 */
export function getArticleDetail(id) {
    return get('/article/detail/' + id);
}

/**
 * 发表文章
 */
export function addArticle(params) {
    return post('/article', params);
}

/**
 * 编辑文章
 */
export function modArticle(params) {
    return put('/article', params);
}

/**
 * 删除文章
 */
export function deleteArticle(id) {
    return dele('/article/' + id);
}
