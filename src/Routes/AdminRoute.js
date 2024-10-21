import { useAdminAuthQuery } from "../Redux/authApi"; // Adjust the import based on your file structure

export default function AdminRoute({ children }) {
  const { data, isLoading, error } = useAdminAuthQuery();

  if (isLoading) return <p>Loading</p>;
  if (error || !data?.ok) return <div>You are not authorized</div>; // Handle unauthorized access

  return <div>{children}</div>;
}
