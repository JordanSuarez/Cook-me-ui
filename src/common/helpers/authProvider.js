const TOKEN = 'token'

/**
 * Set JWT token inside localstorage (temporary)
 * @param token
 */
export const setToken = (token) => localStorage.setItem(TOKEN, token)

/**
 * Return JWT token
 * @returns {string}
 */
export const getToken = () => localStorage.getItem(TOKEN)

/**
 * Return true if user is authenticated
 * @returns {string}
 */
export const isAuthenticated = () => getToken()

/**
 * Remove JWT from localstorage to trigger a logout
 */
export const logout = () => localStorage.removeItem(TOKEN)

/**
 * Set authorization headers for API call with JWT
 * @returns {{headers: {Authorization: (string|null)}}}
 */
export const authorization = {
  Authorization: `Bearer ${getToken()}` || null,
}
