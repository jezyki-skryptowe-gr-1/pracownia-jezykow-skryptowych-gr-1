import apiClient from '@/lib/api';
import type { LoginFormData, SignupFormData } from '../schemas';

export const authApi = {
    login: async (data: LoginFormData) => {
        const response = await apiClient.post('/auth/login', data);
        return response.data;
    },
    signup: async (data: SignupFormData) => {
        const response = await apiClient.post('/auth/signup', data);
        return response.data;
    },
};