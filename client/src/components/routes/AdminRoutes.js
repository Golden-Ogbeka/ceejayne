import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminLogin from "../pages/admin/AdminLogin";
import AllProducts from "../pages/admin/products/AllProducts";
import EditProduct from "../pages/admin/products/EditProduct";
import NewProduct from "../pages/admin/products/NewProduct";

export const AdminRoutes = [
  {
    path: "/admin/login",
    component: AdminLogin,
    protected: true,
  },
  {
    path: "/admin/dashboard",
    component: AdminDashboard,
    private: true,
  },
  {
    path: "/admin/product/edit/:productID",
    component: EditProduct,
    private: true,
  },
  {
    path: "/admin/product/new",
    component: NewProduct,
    private: true,
  },
  {
    path: "/admin/products/all",
    component: AllProducts,
    private: true,
  },
];
