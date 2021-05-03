import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Album } from '.'

const app = () => express(apiRoot, routes)

let album

beforeEach(async () => {
  album = await Album.create({})
})

test('POST /albums 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ artist_id: 'test', name: 'test', genre: 'test', artists: 'test', tracks: 'test', self: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.artist_id).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.genre).toEqual('test')
  expect(body.artists).toEqual('test')
  expect(body.tracks).toEqual('test')
  expect(body.self).toEqual('test')
})

test('GET /albums 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /albums/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${album.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(album.id)
})

test('GET /albums/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('DELETE /albums/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${album.id}`)
  expect(status).toBe(204)
})

test('DELETE /albums/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
