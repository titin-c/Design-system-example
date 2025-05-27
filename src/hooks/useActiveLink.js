import { useLocation } from "react-router-dom";

export function useActiveLink(path) {
  const location = useLocation();
  
  const normalize = (s) => s.replace(/\/$/, "");
  const currentUrl = normalize(location.pathname + location.hash);
  const targetUrl = normalize(path);
  
  return currentUrl === targetUrl ? "active" : "";
}
