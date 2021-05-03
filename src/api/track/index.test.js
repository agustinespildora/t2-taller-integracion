import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Track } from '.'

const app = () => express(apiRoot, routes)

let track

beforeEach(async () => {
  track = await Track.create({})
})

test('POST /tracks 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ album_id: 'test', name: 'test', duration: 'test', times_played: 'test', artist: 'test', album: 'test', self: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.album_id).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.duration).toEqual('test')
  expect(body.times_played).toEqual('test')
  expect(body.artist).toEqual('test')
  expect(body.album).toEqual('test')
  expect(body.self).toEqual('test')
})

test('GET /tracks 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /tracks/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${track.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(track.id)
})

test('GET /tracks/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /tracks/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${track.id}`)
    .send({ album_id: 'test', name: 'test', duration: 'test', times_played: 'test', artist: 'test', album: 'test', self: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(track.id)
  expect(body.album_id).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.duration).toEqual('test')
  expect(body.times_played).toEqual('test')
  expect(body.artist).toEqual('test')
  expect(body.album).toEqual('test')
  expect(body.self).toEqual('test')
})

test('PUT /tracks/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ album_id: 'test', name: 'test', duration: 'test', times_played: 'test', artist: 'test', album: 'test', self: 'test' })
  expect(status).toBe(404)
})

test('DELETE /tracks/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${track.id}`)
  expect(status).toBe(204)
})

test('DELETE /tracks/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
