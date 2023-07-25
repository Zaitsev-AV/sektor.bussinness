import { appActions } from '@/app/app-slice.ts'
import { useAppDispatch } from '@/app/hooks/useAppDispatch.ts'
import { useAppSelector } from '@/app/hooks/useAppSelector.ts'
import { useDebounce } from '@/common/hooks/useDebounce.ts'
import { Sort } from '@/components/ui/table'
import {
  selectGetPostsData,
  selectGetSortData,
  selectSearchQuery,
} from '@/services/posts/posts-selector.ts'
import { postsActions, postsThunks } from '@/services/posts/posts-slice.ts'
import { PostsType } from '@/services/posts/types.ts'
/**
 * Хук для управления данными постов.
 * @returns {Object} Объект с функциями и данными для управления постами.
 */
export const usePosts = () => {
  const dispatch = useAppDispatch()
  const postData = useAppSelector(selectGetPostsData)
  const sortData = useAppSelector(selectGetSortData)
  const searchQuery = useAppSelector(selectSearchQuery)
  /**
   * Устанавливает параметры сортировки.
   * @param {Object} data - Объект с данными сортировки.
   */
  const setSortData = (data: Sort) => {
    dispatch(postsActions.setSortParams(data))
  }
  /**
   * Получает список постов асинхронно. И инициализирум приложение.
   */
  const getPosts = async () => {
    await dispatch(postsThunks.getPosts())
    dispatch(appActions.setInitialization({ isAppInitialized: true }))
  }
  /**
   * Обновляет поисковый запрос.
   * @param {string} query - Строка поискового запроса.
   */
  const onSearch = (query: string) => {
    dispatch(postsActions.setSearchQuery(query))
  }
  /**
   * Сортирует данные постов.
   * @param {Array} data - Массив данных постов.
   * @param {Object} sort - Объект с данными сортировки.
   */
  const sortable = (data: PostsType, sort: Sort) => {
    if (!sort) return data
    const { columnKey, direction } = sort

    return [...data].sort((a, b) => {
      if (direction === 'asc') {
        return a[columnKey] > b[columnKey] ? 1 : -1
      } else {
        return a[columnKey] < b[columnKey] ? 1 : -1
      }
    })
  }

  const debouncedSearchTerm = useDebounce(searchQuery, 500)

  /**
   * Фильтрует посты по поисковому запросу.
   * @param {string} searchQuery - Строка поискового запроса.
   * @param {Array} posts - Массив данных постов.
   */

  const filteredPosts = (searchQuery: string, posts: PostsType) => {
    if (!searchQuery) {
      return posts
    }

    return posts.filter(post => {
      return post.title.toLowerCase().includes(searchQuery.toLowerCase())
    })
  }

  const sortingData = sortable(postData, sortData)
  const data = filteredPosts(debouncedSearchTerm, sortingData)

  return {
    getPosts,
    postData,
    setSortData,
    sortData,
    onSearch,
    searchQuery,
    data,
  }
}
