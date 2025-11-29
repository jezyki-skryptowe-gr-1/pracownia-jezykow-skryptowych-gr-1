import { useQuery } from '@tanstack/react-query';
import { dashboardApi } from '../api';
import { getUser } from '@/utils';

export const useChartDataQuery = () => {
    const user = getUser();
    return useQuery({
        queryKey: ['chartData', user?.id],
        queryFn: () => dashboardApi.getChartData(user?.id),
        enabled: !!user,
    });
};