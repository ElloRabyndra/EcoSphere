import React from "react";
import PageHeader from "@/components/badge/PageHeader";
import BadgeGrid from "@/components/badge/BadgeGrid";
import { Card } from "@/components/ui/card";
import { badges } from "@/database/data";
const Badge = () => {
  return (
    <main className="flex flex-col flex-1 p-6 md:ml-16 py-8 md:p-8 md:py-12">
      <Card className="max-w-5xl mx-auto bg-gray-50 p-6 rounded-2xl">
        <PageHeader
          title="Badge"
          subtitle="Badge akan muncul jika aksi tertentu selesai"
        />
        <BadgeGrid badges={badges} />
      </Card>
    </main>
  );
};

export default Badge;
