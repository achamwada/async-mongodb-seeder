import mapOptionsToSchema from './mapOptionsToSchema'
/**
 * @param {Object} job
 * @returns {Promise}
 */
export default job => {
  const { schemaProps, total, schemaOperationOptions, MongoSchema } = job

  return new Promise(async (resolve, reject) => {
    try {
      let results = [...Array(total).keys()].map(key =>
        mapOptionsToSchema(schemaProps, schemaOperationOptions),
      )
      await MongoSchema.insertMany(results)
      resolve(results)
    } catch ({ message }) {
      console.log('Error in batching:', message)
      reject(new Error(message))
    }
  })
}
