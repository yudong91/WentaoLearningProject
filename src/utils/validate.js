/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['yudong', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

export function validPassword(str) {
  const valid_map = ['123123', '123']
  return valid_map.indexOf(str.trim()) >= 0
}
