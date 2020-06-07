import faker from 'faker';
/**
 * @param {Object} schemaProps
 * @param {Array} schemaOperationOptions
 * @returns {Object}
 */
export default (schemaProps, schemaOperationOptions) => {
  let result = Object.keys(schemaProps).map((key, index) => {
    if (schemaOperationOptions[index]['name'] === 'CustomSchema') {
      const randomObject = { _id: '5f6adc3a53eda0782cf395ff' }; //schemaOperationOptions[index]['func'].findOne();
      console.log('randomObject._id:', randomObject._id);
      console.log('========================');

      return {
        [key]: randomObject._id,
      };
    } else {
      console.log(
        faker[schemaOperationOptions[index]['name']][
          schemaOperationOptions[index]['func']
        ](),
      );
      console.log('========================');
      // return
      return {
        [key]: faker[schemaOperationOptions[index]['name']][
          schemaOperationOptions[index]['func']
        ](),
      };
    }
  });

  return Object.assign({}, ...result);
};
