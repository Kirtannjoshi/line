import { useState, useEffect } from 'react';
import { loadUser, saveUser, removeUser } from './localStorage';
import { UserInfo } from './types';
import axios from 'axios';

export const useAuth = () => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = loadUser();
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const { data } = await axios.post('/api/users/login', { email, password });
      saveUser(data as UserInfo);
      setUser(data as UserInfo);
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const register = async (username: string, email: string, password: string) => {
    setLoading(true);
    try {
      const { data } = await axios.post('/api/users', { username, email, password });
      saveUser(data as UserInfo);
      setUser(data as UserInfo);
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const logout = () => {
    removeUser();
    setUser(null);
  };

  return { user, loading, login, register, logout };
};