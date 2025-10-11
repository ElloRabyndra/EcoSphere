import React from "react";
import PageHeader from "@/components/badge/PageHeader";
import BadgeGrid from "@/components/badge/BadgeGrid";
import { Card } from "@/components/ui/card";

const Badge = () => {
  const badges = [
    {
      id: 1,
      title: "Green Starter",
      description: "Selesaikan 1 aksi lingkungan pertama.",
      isComplete: true,
    },
    {
      id: 2,
      title: "Eco Explorer",
      description: "Selesaikan minimal 1 aksi di 3 kategori berbeda.",
      isComplete: false,
    },
    {
      id: 3,
      title: "Plastic Hero",
      description: 'Selesaikan 5 aksi di kategori "Kurangi Sampah Plastik".',
      isComplete: true,
    },
    {
      id: 4,
      title: "Energy Saver",
      description: 'Selesaikan 5 aksi di kategori "Penghematan Energi".',
      isComplete: false,
    },
    {
      id: 5,
      title: "Eco Master",
      description: "Capai level maksimum atau selesaikan semua aksi.",
      isComplete: true,
    },
    {
      id: 6,
      title: "Nature Guardian",
      description: 'Selesaikan 5 aksi di kategori "Peduli Alam".',
      isComplete: false,
    },
  ];

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
