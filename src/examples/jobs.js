import User from './models/User';
import Role from './models/Role';
import faker from 'faker';

const schemaOperationOptions = [
  {
    name: 'address',
    func: 'streetAddress',
  },
  {
    name: 'random',
    func: 'number',
  },
  {
    name: 'address',
    func: 'countryCode',
  },

  {
    name: 'internet',
    func: 'email',
  },
  {
    name: 'name',
    func: 'firstName',
  },
  {
    name: 'name',
    func: 'lastName',
  },
  {
    name: 'internet',
    func: 'password',
  },
  {
    name: 'phone',
    func: 'phoneNumber',
  },
  {
    name: 'CustomSchema',
    func: Role,
  },
  {
    name: 'name',
    func: 'title',
  },
  {
    name: 'image',
    func: 'avatar',
  },
];

const schemaProps = {
  address: null,
  age: null,
  countryCode: null,
  email: null,
  firstName: null,
  lastName: null,
  password: null,
  phoneNumber: null,
  role: null,
  title: null,
  avatar: null,
};

export default {
  total: 10,
  schemaProps,
  schemaOperationOptions,
  MongoSchema: User,
};
