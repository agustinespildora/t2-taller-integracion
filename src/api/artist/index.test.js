import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Artist } from '.'

const app = () => express(apiRoot, routes)

let artist

beforeEach(async () => {
  artist = await Artist.create({})
})

test('POST /artists 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', age: 'test', albums: 'test', tracks: 'test', self: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.age).toEqual('test')
  expect(body.albums).toEqual('test')
  expect(body.tracks).toEqual('test')
  expect(body.self).toEqual('test')
})

test('GET /artists 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /artists/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${artist.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(artist.id)
})

test('GET /artists/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('DELETE /artists/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${artist.id}`)
  expect(status).toBe(204)
})

test('DELETE /artists/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
