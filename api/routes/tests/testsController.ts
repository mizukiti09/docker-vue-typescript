import { Router } from 'express'
import { GetTests } from '../tests/get_tests'

const router = Router()

router.get('/', (req, res, next) => {
    // rest.send('ルーティング 完了')
    new GetTests(req, res).main().catch(next)
})

export default router

