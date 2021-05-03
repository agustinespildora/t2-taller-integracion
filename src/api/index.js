import { Router } from 'express'
import album from './album'
import track from './track'
import artist from './artist'
// var track = require('./track');

// console.log(Buffer.from('Hélló wórld!!', 'binary').toString('base64'))
// console.log(Buffer.from('SOlsbPMgd/NybGQhIQ==', 'base64').toString('binary'))

const router = new Router()

router.use('/albums', album)
router.use('/artists', artist)
router.use('/tracks', track)
// console.log(router)

/**
 * @apiDefine master Master access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine admin Admin access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine user User access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine listParams
 * @apiParam {String} [q] Query to search.
 * @apiParam {Number{1..30}} [page=1] Page number.
 * @apiParam {Number{1..100}} [limit=30] Amount of returned items.
 * @apiParam {String[]} [sort=-createdAt] Order of returned items.
 * @apiParam {String[]} [fields] Fields to be returned.
 */

export default router
