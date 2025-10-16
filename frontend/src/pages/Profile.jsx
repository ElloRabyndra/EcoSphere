import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileStats from "@/components/profile/ProfileStats";
import ProfileBadges from "@/components/profile/ProfileBadges";
import { useAuth } from "@/features/auth/useAuth";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const Profile = () => {
  const { user, loading: authLoading } = useAuth();

  // Tampilkan spinner jika auth masih loading atau user belum siap
  if (authLoading || !user) {
    return (
      <main className="min-h-screen flex justify-center items-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </main>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6 ">
        <ProfileHeader user={user} />
        <ProfileStats user={user} />
        <ProfileBadges badges={user.earned_badges} />
      </div>
    </div>
  );
};

export default Profile;
