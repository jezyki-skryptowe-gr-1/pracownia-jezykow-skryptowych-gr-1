import apiClient from '@/lib/api';

export interface User {
    id: number;
    email: string;
    name: string;
}

export const getUser = (): User | null => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};

export const setUser = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
};

export const clearUser = () => {
    localStorage.removeItem('user');
};

export const isAuthenticated = async (): Promise<boolean> => {
    try {
        const response = await apiClient.get('/auth/me');
        setUser(response.data);
        return true;
    } catch {
        return false;
    }
};

export const requireAuth = async () => {
    const auth = await isAuthenticated();
    if (!auth) {
        throw new Error('Unauthorized');
    }
};

export const requireNoAuth = async () => {
    const auth = await isAuthenticated();
    if (auth) {
        throw new Error('Already authenticated');
    }
};