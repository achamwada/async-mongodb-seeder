# async-mongodb-seeder

## 🔍 Overview

`async-mongodb-seeder` is a simple and lightweight wrapper on faker.js that allows for multiple async mongodb seeding to make the development process easier and quicker

## ⏳ Installation

```sh
$ npm i async-mongodb-seeder
```

## 👋 Getting started

**Learn by example?** [Check the sample app out](https://github.com/achamwada/async-mongodb-seeder/blob/master/src/examples/index.js).

### 1. Setting up seed

Call the seed with a array of jobs

```js
import seed from 'async-mongodb-seeder'
import job from './jobs'

let results
seed([job])
  .then(res => {
    results = res
  })
  .catch(e => console.log(e))
  .finally(async () => {
    console.log('Finally results ===>', results)
  })
```

```js
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

const job = {
  total: 10,
  schemaProps,
  schemaOperationOptions,
  MongoSchema: Todo,
}
```


### 3. MongoDB model

Here you need to create a mongoDB model, below is an example

```js
import { Schema, model } from 'mongoose'

const TodoSchema = new Schema(
  {
    title: String,
    img: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

export default model('todo', TodoSchema)
```

## 💡 Contributing

This package is still early doors. Please do get involved, feel free to critique it, offer solutions that can change its approach slightly, or request examples on how you want to use it. Spotted a bug, need something adding? Raise an issue. Pull requests welcome. 👌 

## 🔑 License

[MIT](https://github.com/achamwada/async-mongodb-seeder/blob/master/LICENSE.md)