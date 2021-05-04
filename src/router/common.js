import Default from '@/components/common/Default'
import Main from '@/components/Main'
// import Landing from '@/components/Landing'
import Login from '@/components/Login'
import Error from '@/components/common/Error'
const router = [
  {path: '', name: 'Login', component: Login},
  {
    path: '/',
    component: Default,
    children: [
      {path: 'main', name: 'main', component: Main},
      // {path: 'main', redirect: { name: 'main' }}
    ]
  },
  // { path: '/:pathMatch(.*)*', component: Error }
  { path: '/:catchAll(.*)', component: Error }
]

export default router
