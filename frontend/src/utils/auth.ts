import apiClient from '@/lib/api';

export const isAuthenticated = async (): Promise<boolean> => {
    try {
        await apiClient.get('/auth/me');
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