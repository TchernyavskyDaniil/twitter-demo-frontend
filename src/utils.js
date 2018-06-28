import users from './users';

export default (user, param) => {
  try {
    return users.find(obj => obj.username === user)[param];
  } catch (e) {
    return 'Invalid URL';
  }
};
