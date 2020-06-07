import Todo from './models/Todo'

const schemaOperationOptions = [
  {
    name: 'lorem',
    func: 'sentence',
  },
  {
    name: 'image',
    func: 'imageUrl',
  },
  {
    name: 'random',
    func: 'boolean',
  },
]

const schemaProps = {
  title: null,
  img: null,
  completed: null,
}

export default {
  total: 10,
  schemaProps,
  schemaOperationOptions,
  MongoSchema: Todo,
}
