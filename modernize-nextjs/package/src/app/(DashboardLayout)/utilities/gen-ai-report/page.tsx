'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const SamplePage = () => {
  return (
    <PageContainer title="Gen AI Page" description="this is Gen AI page">
      <DashboardCard title="Gen AI Page">
        <Typography>This is a Gen AI page</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;

