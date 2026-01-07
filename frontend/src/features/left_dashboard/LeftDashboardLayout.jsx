import { NavLink, Outlet } from "react-router-dom";
import {
  Home,
  ShoppingCart,
  Briefcase,
  Calendar,
  Settings,
} from "lucide-react";

export default function LeftDashboardLayout() {
  const base =
    "flex items-center justify-between px-3 py-2 rounded-md";
  const left = "flex items-center gap-3";

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <aside className="w-[250px] bg-white  px-6 py-8 flex flex-col">
        <div className="mb-12">
          <img
            src="/login/login_logo.png"
            alt="ImpactLens"
            className="max-w-[190px]"
          />
        </div>

        <nav className="flex flex-col gap-4 text-sm">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${base} ${isActive ? "text-black font-semibold" : "text-gray-500"}`
            }
          >
            {({ isActive }) => (
              <>
                <div className={left}>
                  <Home size={18} color={isActive ? "#FFDD00" : "#D1D5DB"} />
                  Dashboard
                </div>
                {isActive && (
                  <span className="h-6 w-1 bg-[#FFDD00] rounded-full" />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/blogs/1"
            className={({ isActive }) =>
              `${base} ${isActive ? "text-black font-semibold" : "text-gray-500"}`
            }
          >
            {({ isActive }) => (
              <>
                <div className={left}>
                  <ShoppingCart
                    size={18}
                    color={isActive ? "#FFDD00" : "#D1D5DB"}
                  />
                  Blogs
                </div>
                {isActive && (
                  <span className="h-6 w-1 bg-[#FFDD00] rounded-full" />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              `${base} ${isActive ? "text-black font-semibold" : "text-gray-500"}`
            }
          >
            {({ isActive }) => (
              <>
                <div className={left}>
                  <Briefcase
                    size={18}
                    color={isActive ? "#FFDD00" : "#D1D5DB"}
                  />
                  Jobs
                </div>
                {isActive && (
                  <span className="h-6 w-1 bg-[#FFDD00] rounded-full" />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/events"
            className={({ isActive }) =>
              `${base} ${isActive ? "text-black font-semibold" : "text-gray-500"}`
            }
          >
            {({ isActive }) => (
              <>
                <div className={left}>
                  <Calendar
                    size={18}
                    color={isActive ? "#FFDD00" : "#D1D5DB"}
                  />
                  Events
                </div>
                {isActive && (
                  <span className="h-6 w-1 bg-[#FFDD00] rounded-full" />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `${base} ${isActive ? "text-black font-semibold" : "text-gray-500"}`
            }
          >
            {({ isActive }) => (
              <>
                <div className={left}>
                  <Settings
                    size={18}
                    color={isActive ? "#FFDD00" : "#D1D5DB"}
                  />
                  Settings
                </div>
                {isActive && (
                  <span className="h-6 w-1 bg-[#FFDD00] rounded-full" />
                )}
              </>
            )}
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1  pt-2 px-5 pb-5 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
