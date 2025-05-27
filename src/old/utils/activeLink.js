import { useLocation } from "react-router-dom";

export function useActiveLink(path) {
  const location = useLocation();
  return location.pathname === path ? "active-link" : "";
}
