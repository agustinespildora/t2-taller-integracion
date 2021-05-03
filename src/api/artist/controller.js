import { success, notFound } from '../../services/response/'
import { Artist } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Artist.create(body)
    .then((artist) => artist.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Artist.find(query, select, cursor)
    .then((artists) => artists.map((artist) => artist.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Artist.findById(params.id)
    .then(notFound(res))
    .then((artist) => artist ? artist.view() : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Artist.findById(params.id)
    .then(notFound(res))
    .then((artist) => artist ? artist.remove() : null)
    .then(success(res, 204))
    .catch(next)
