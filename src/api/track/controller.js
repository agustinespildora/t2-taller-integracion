import { success, notFound } from '../../services/response/'
import { Track } from '.'

// console.log(req.rawBody)

export const create = ({ bodymen: { body } }, res, next) =>
  Track.create(body)
    .then((track) => track.view(true))
    .then(success(res, 201))
    .catch(next)

// export const create = (req, res, next) =>
//   Track.create(req.rawBody)
//     .then((track) => track.view(true))
//     .then(success(res, 201))
//     .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Track.find(query, select, cursor)
    .then((tracks) => tracks.map((track) => track.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Track.findById(params.id)
    .then(notFound(res))
    .then((track) => track ? track.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Track.findById(params.id)
    .then(notFound(res))
    .then((track) => track ? Object.assign(track, body).save() : null)
    .then((track) => track ? track.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Track.findById(params.id)
    .then(notFound(res))
    .then((track) => track ? track.remove() : null)
    .then(success(res, 204))
    .catch(next)
