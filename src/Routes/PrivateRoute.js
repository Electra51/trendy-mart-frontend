import { useEffect, useState } from "react";
import { useUserAuthQuery } from "../Redux/authApi";

export default function PrivateRoute({ children }) {
  const [ok, setOk] = useState(false);
  const { data, isLoading, error } = useUserAuthQuery();

  useEffect(() => {
    if (data && data.ok) {
      setOk(true);
    } else {
      setOk(false);
    }
  }, [data]);

  if (isLoading) return <p>Loading</p>;

  return ok ? <div>{children}</div> : <div>You are not authorized</div>;
}
