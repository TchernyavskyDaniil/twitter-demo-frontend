export const users = [
  {
    id: 1,
    name: 'Every Interaction',
    username: 'EveryInteract',
  },
  {
    id: 2,
    name: 'AppleInsider',
    username: 'appleinsider',
  },
  {
    id: 3,
    name: 'Creode',
    username: 'Creode',
  },
  {
    id: 4,
    name: 'Epiphany Search',
    username: 'Epiphanysearch',
  },
  {
    id: 5,
    name: 'Mir Hasan Jamil',
    username: 'mirhasanjamil75',
  },
  {
    id: 6,
    name: 'Alex Down',
    username: 'alexdown',
  },
  {
    id: 7,
    name: 'Terry Coopey',
    username: 'TerryCoopey',
  },
  {
    id: 8,
    name: 'Niamh Keane',
    username: 'NiamhKeaneB_ID',
  },
  {
    id: 9,
    name: 'Peter Venglarik',
    username: 'venglarcik',
  },
  {
    id: 10,
    name: 'K A T Z E D',
    username: 'katzedsgn',
  },
];

export const others = [
  {
    id: 1,
    to: '/moments',
  },
  {
    id: 2,
    to: '/messages',
  },
  {
    id: 3,
    to: '/notifications',
  },
  {
    id: 4,
    to: '/view_all',
  },
  {
    id: 5,
    to: '/change',
  },
  {
    id: 6,
    to: '/all_people',
  },
  {
    id: 7,
    to: '/about',
  },
  {
    id: 8,
    to: '/support',
  },
  {
    id: 9,
    to: '/terms',
  },
  {
    id: 10,
    to: '/privacy_policy',
  },
  {
    id: 11,
    to: '/cookies',
  },
  {
    id: 12,
    to: '/ads',
  },
  {
    id: 13,
    to: '/search',
  },
];

export const findUserById = (id, param) => {
  let userParam = Object.keys(users).map(index => {
    if (users[index].username === id) {
      return users[index][param];
    }

    return null;
  });

  userParam = userParam.filter(elem => elem !== null);

  if (userParam.length === 0) {
    return 'Invalid URL';
  }

  return String(userParam);
};
