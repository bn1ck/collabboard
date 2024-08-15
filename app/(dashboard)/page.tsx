"use client";

import { useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/EmptyOrg";
import Boardlist from "./_components/Boardlist";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: boolean;
  };
}

const DashboardPage: React.FC<DashboardPageProps> = ({ searchParams }) => {
  const { organization } = useOrganization();
  return (
    <div className="flex flex-col gap-y-4 flex-1 h-[calc(100vh-68px)] p-6">
      {organization ? (
        <Boardlist orgId={organization.id} query={searchParams} />
      ) : (
        <EmptyOrg />
      )}
    </div>
  );
};

export default DashboardPage;
