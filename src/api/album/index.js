import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, destroy } from './controller'
import { schema } from './model'
export Album, { schema } from './model'

const router = new Router()
const { artist_id, name, genre, artists, tracks, self } = schema.tree

/**
 * @api {post} /albums Create album
 * @apiName CreateAlbum
 * @apiGroup Album
 * @apiParam artist_id Album's artist_id.
 * @apiParam name Album's name.
 * @apiParam genre Album's genre.
 * @apiParam artists Album's artists.
 * @apiParam tracks Album's tracks.
 * @apiParam self Album's self.
 * @apiSuccess {Object} album Album's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Album not found.
 */
router.post('/',
  body({ artist_id, name, genre, artists, tracks, self }),
  create)

/**
 * @api {get} /albums Retrieve albums
 * @apiName RetrieveAlbums
 * @apiGroup Album
 * @apiUse listParams
 * @apiSuccess {Object[]} albums List of albums.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /albums/:id Retrieve album
 * @apiName RetrieveAlbum
 * @apiGroup Album
 * @apiSuccess {Object} album Album's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Album not found.
 */
router.get('/:id',
  show)

/**
 * @api {delete} /albums/:id Delete album
 * @apiName DeleteAlbum
 * @apiGroup Album
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Album not found.
 */
router.delete('/:id',
  destroy)

export default router
