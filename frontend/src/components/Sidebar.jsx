import React from "react";
import { Link, useLocation } from "react-router";
import {
  Home,
  BookOpen,
  Swords,
  Award,
  CircleQuestionMark,
  CircleUser,
  LogOutIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: BookOpen, label: "Edukasi", path: "/edukasi" },
    { icon: Swords, label: "Aksi", path: "/aksi" },
    { icon: Award, label: "Badge", path: "/badge" },
    { icon: CircleQuestionMark, label: "Tentang", path: "/tentang" },
    { icon: CircleUser, label: "Profil", path: "/profil" },
  ];

  const isActivePath = (path) => location.pathname === path;

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 h-full w-16 z-40 pt-8 flex flex-col justify-between gap-4",
        "bg-white dark:bg-card border-r border-gray-200 dark:border-border shadow-lg"
      )}
    >
      {/* Bagian atas: logo */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 sm:w-12 sm:h-12 mb-8">
          <img
            src="/Nav/Logo-EcoSphere.png"
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Navigasi utama */}
        <ul className="space-y-3 w-max">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = isActivePath(item.path);
            return (
              <li key={item.path} className="relative group">
                <Link
                  to={item.path}
                  onClick={handleLinkClick}
                  className={cn(
                    "flex items-center justify-center px-3 py-3 rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-primary text-white"
                      : "text-primary hover:bg-primary/10"
                  )}
                >
                  <Icon className="w-5.5 h-5.5 sm:w-6 sm:h-6 flex-shrink-0" />
                </Link>

                {/* Tooltip label */}
                <span
                  className={cn(
                    "absolute left-full ml-4 px-3 py-1 top-2.5 rounded-md font-semibold text-sm whitespace-nowrap",
                    "bg-primary text-white opacity-0 group-hover:opacity-100",
                    "transition-opacity duration-200 pointer-events-none"
                  )}
                >
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bagian bawah: tombol logout */}
      <div className="p-2.5 bg-primary rounded-lg mx-auto mb-6 cursor-pointer hover:bg-primary/90 transition-colors">
        <LogOutIcon className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-white" />
      </div>
    </aside>
  );
};

export default Sidebar;