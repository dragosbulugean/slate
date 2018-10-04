/**
 * Create a plugin from a set of `queries`.
 *
 * @param {Object} queries
 * @return {Object}
 */

function QueriesPlugin(queries) {
  /**
   * On query, if it exists in our list of queries, call it.
   *
   * @param {Object} query
   * @param {Function} next
   */

  function onQuery(query, next) {
    const { type, args } = query

    // Defer to other plugins in the stack.
    const ret = next()
    if (ret !== undefined) return ret

    // If the query isn't found, abort.
    if (!(type in queries)) return

    // Otherwise, run the query.
    const fn = queries[type]
    return fn(...args)
  }

  /**
   * Return the plugin.
   *
   * @type {Object}
   */

  return {
    onQuery,
  }
}

/**
 * Export.
 *
 * @type {Object}
 */

export default QueriesPlugin