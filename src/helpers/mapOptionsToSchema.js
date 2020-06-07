import faker from 'faker'
/**
 * @param {Object} schemaProps
 * @param {Array} schemaOperationOptions
 * @returns {Object}
 */
export default (schemaProps, schemaOperationOptions) => {
  let result = Object.keys(schemaProps).map((key, index) => {
    return {
      [key]: faker[schemaOperationOptions[index]['name']][
        schemaOperationOptions[index]['func']
      ](),
    }
  })

  return Object.assign({}, ...result)
}
