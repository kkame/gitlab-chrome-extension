import { createAction } from 'redux-actions'

export const load = createAction('LOAD')
export const setGitlabUrl = createAction('SET_GITLAB_URL')
export const setPage = createAction('SET_PAGE', page => ({ page }))
export const updateEntity = createAction('UPDATE_ENTITY')
export const openProfile = createAction('OPEN_PROFILE')
export const openSettings = createAction('OPEN_SETTINGS')

export const openTab = createAction('OPEN_TAB', url => ({ url }))
export const openGitlabTab = createAction('OPEN_GITLAB_TAB')
export const getOpenedTab = createAction('GET_OPENED_TAB')

// TOKEN
export const getPersonalToken = createAction('GET_PERSONAL_TOKEN')
export const removeToken = createAction('REMOVE_TOKEN')
export const removeTokenSuccess = createAction('REMOVE_TOKEN_SUCCESS')

// USER
export const requestUser = createAction('REQUEST_USER')
export const requestUserError = createAction('REQUEST_USER_ERROR')
export const requestUserSuccess = createAction('REQUEST_USER_SUCCESS')

// projects
export const pinProject = createAction('PIN_PROJECT')
export const swapPinnedProjects = createAction('SWAP_PINNED_PROJECTS')
export const unpinProject = createAction('UNPIN_PROJECT')
export const loadProjects = createAction('LOAD_PROJECTS')
export const requestProjects = createAction('REQUEST_PROJECTS')
export const requestProjectsError = createAction('REQUEST_PROJECTS_ERROR')
export const requestProjectsSuccess = createAction('REQUEST_PROJECTS_SUCCESS')

export const loadSearchProjects = createAction('LOAD_SEARCH_PROJECTS', query => ({ query }))
export const searchProjects = createAction('SEARCH_PROJECTS')
export const searchProjectsError = createAction('SEARCH_PROJECTS_ERROR')
export const searchProjectsSuccess = createAction('SEARCH_PROJECTS_SUCCESS')

// TODOS
export const loadTodos = createAction('LOAD_TODOS')
export const requestTodos = createAction('REQUEST_TODOS')
export const requestTodosError = createAction('REQUEST_TODOS_ERROR')
export const requestTodosSuccess = createAction('REQUEST_TODOS_SUCCESS')
export const markAllTodosAsDone = createAction('MARK_ALL_TODOS_AS_DONE')
export const requestMarkTodoAsDone = createAction('REQUEST_MARK_TODO_AS_DONE')
export const requestMarkTodoAsDoneError = createAction('REQUEST_MARK_TODO_AS_DONE_ERROR')
export const requestMarkTodoAsDoneSuccess = createAction('REQUEST_MARK_TODO_AS_DONE_SUCCESS')

// ISSUES
export const openExternalNewIssue = createAction('OPEN_EXTERNAL_NEW_ISSUE')
export const newIssue = createAction('NEW_ISSUE')
export const setIssueMessage = createAction('SET_ISSUE_MESSAGE')
export const createIssue = createAction('CREATE_ISSUE')
export const createIssueSuccess = createAction('CREATE_ISSUE_SUCCESS')
export const createIssueError = createAction('CREATE_ISSUE_ERROR')
