import apiClient from '@/lib/api';

export const dashboardApi = {
    getChartData: async (userId?: number) => {
        const response = await apiClient.get(`/charts${userId ? `?userId=${userId}` : ''}`);
        return response.data;
    },
};