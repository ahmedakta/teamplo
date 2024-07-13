// this file for functions used a lot
import { useRouter } from 'vue-router'
const router = useRouter()

export function redirectBack() {
  router.go()
}
