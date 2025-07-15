import { UserInfo } from './types';

export const saveUser = (userInfo: UserInfo) => {
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
};

export const loadUser = (): UserInfo | null => {
  const userInfo = localStorage.getItem('userInfo');
  return userInfo ? JSON.parse(userInfo) : null;
};

export const removeUser = () => {
  localStorage.removeItem('userInfo');
};