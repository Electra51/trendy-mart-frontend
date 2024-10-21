import { useAdminAuthQuery } from "../Redux/authApi";

export default function AdminRoute({ children }) {
  const { data, isLoading, error } = useAdminAuthQuery();

  if (isLoading) return <p>Loading</p>;
  if (error || !data?.ok) return <div>You are not authorized</div>;

  return <div>{children}</div>;
}
