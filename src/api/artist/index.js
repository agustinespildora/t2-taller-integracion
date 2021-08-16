import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, destroy } from './controller'
import { schema } from './model'
import { Artist } from '.'
export Artist, { schema } from './model'

const router = new Router()
const { name, age, albums, tracks, self } = schema.tree

/**Holakalala */
/**
 * @api {post} /artists Create artist
 * @apiName CreateArtist
 * @apiGroup Artist
 * @apiParam name Artist's name.
 * @apiParam age Artist's age.
 * @apiParam albums Artist's albums.
 * @apiParam tracks Artist's tracks.
 * @apiParam self Artist's self.
 * @apiSuccess {Object} artist Artist's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Artist not found.
 */
router.post('/',
  body({ name, age, albums, tracks, self }),
  create)

// router.post('/', async (req, res) => {
//   const _id = Buffer.from(req.body.name, 'binary').toString('base64')
//   const artist = new Artist({
//     id: _id,
//     name: req.body.name,
//     age: req.body.age,
//     albums: req.body.albums,
//     tracks: req.body.tracks,
//     self: req.body.self
//   })
//   try {
//     const savedArtist = await artist.save()
//     res.json(savedArtist)
//   } catch (err) {
//     res.json({ message: err })
//   }
// })

/**
 * @api {get} /artists Retrieve artists
 * @apiName RetrieveArtists
 * @apiGroup Artist
 * @apiUse listParams
 * @apiSuccess {Object[]} artists List of artists.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /artists/:id Retrieve artist
 * @apiName RetrieveArtist
 * @apiGroup Artist
 * @apiSuccess {Object} artist Artist's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Artist not found.
 */
router.get('/:id',
  show)

/**
 * @api {delete} /artists/:id Delete artist
 * @apiName DeleteArtist
 * @apiGroup Artist
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Artist not found.
 */
router.delete('/:id',
  destroy)

export default router
