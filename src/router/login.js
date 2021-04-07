import Default from '@/components/common/Default'
import Login from '@/components/Login'

const router = {
    path: '/login',
    component: Default,
    children: [
      {path: '', name: 'login', component: Login}
    ]
  }

export default router
