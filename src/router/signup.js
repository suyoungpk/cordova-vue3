import Default from '@/components/common/Default'
import Signup from '@/components/signup/Signup'

const router = {
    path: '/signup',
    component: Default,
    children: [
      {path: '', name: 'signup', component: Signup}
    ]
  }

export default router
