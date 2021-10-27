export const ROUTER = {
  USER: {
    HOME: '/',
    PRODUCT_LIST: '/products',
    PRODUCT_DETAIL: '/product/:id',
    TO_DO_LIST_ANTD: '/todolist/antd',
    TO_DO_LIST_HOOK: '/todolist/hook',
  },
  ADMIN: {
    DASHBOARD: '/admin/dashboard',
    PRODUCT_LIST: '/admin/products',
    CREATE_PRODUCT: '/admin/products/create',
    UPDATE_PRODUCT: '/admin/products/:id/update',
    TO_DO_LIST_ANTD: '/admin/todolist/antd',
  },
  LOGIN: '/login',
  NOT_FOUND: '/not-found',
}
