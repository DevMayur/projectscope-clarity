import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/auth/AuthContext";
import { AppLayout } from "./AppLayout";

export default function ProtectedLayout() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
