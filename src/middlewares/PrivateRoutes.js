import BaseLayout from "../layouts/BaseLayout";
import { Navigate } from "react-router-dom";

export default function PrivateRoutes() {
  const accessToken = sessionStorage.getItem("accessToken");
  return accessToken ? <BaseLayout /> : <Navigate to="/" />;
}
