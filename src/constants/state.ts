/**
 * @file State constant
 * @module constant.state
 * @author Surmon <https://github.com/surmon-china>
 */

// 转载状态
export enum OriginState {
  Original = 0, // 原创
  Reprint = 1, // 转载
  Hybrid = 2 // 混合
}

// 评论宿主页面的 POST_ID 类型
export enum CommentPostID {
  Guestbook = 0 // 留言板
}

// 评论本身的类型
export enum CommentParentType {
  Self = 0 // 自身一级评论
}

// 排序状态
export enum SortType {
  Asc = 1, // 升序
  Desc = -1, // 降序
  Hottest = 2 // 热序
}

export interface UniversalKeyValue {
  name: string
  value: string
}

export interface Pagination {
  current_page: number
  total_page: number
  per_page: number
  total: number
}
