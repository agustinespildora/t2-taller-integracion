import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Track, { schema } from './model'

const router = new Router()
const { album_id, name, duration, times_played, artist, album, self } = schema.tree

// const name1 = Buffer.from(name["type"]["Function"], 'binary').toString('base64')
// console.log(schema)
/**
 * @api {post} /tracks Create track
 * @apiName CreateTrack
 * @apiGroup Track
 * @apiParam album_id Track's album_id.
 * @apiParam name Track's name.
 * @apiParam duration Track's duration.
 * @apiParam times_played Track's times_played.
 * @apiParam artist Track's artist.
 * @apiParam album Track's album.
 * @apiParam self Track's self.
 * @apiSuccess {Object} track Track's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Track not found.
 */
router.post('/',
  body({ album_id, name, duration, times_played, artist, album, self }),
  create)

/**
 * @api {get} /tracks Retrieve tracks
 * @apiName RetrieveTracks
 * @apiGroup Track
 * @apiUse listParams
 * @apiSuccess {Object[]} tracks List of tracks.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /tracks/:id Retrieve track
 * @apiName RetrieveTrack
 * @apiGroup Track
 * @apiSuccess {Object} track Track's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Track not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /tracks/:id Update track
 * @apiName UpdateTrack
 * @apiGroup Track
 * @apiParam album_id Track's album_id.
 * @apiParam name Track's name.
 * @apiParam duration Track's duration.
 * @apiParam times_played Track's times_played.
 * @apiParam artist Track's artist.
 * @apiParam album Track's album.
 * @apiParam self Track's self.
 * @apiSuccess {Object} track Track's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Track not found.
 */
router.put('/:id',
  body({ album_id, name, duration, times_played, artist, album, self }),
  update)

/**
 * @api {delete} /tracks/:id Delete track
 * @apiName DeleteTrack
 * @apiGroup Track
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Track not found.
 */
router.delete('/:id',
  destroy)

export default router
