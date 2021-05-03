import { Track } from '.'

let track

beforeEach(async () => {
  track = await Track.create({ album_id: 'test', name: 'test', duration: 'test', times_played: 'test', artist: 'test', album: 'test', self: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = track.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(track.id)
    expect(view.album_id).toBe(track.album_id)
    expect(view.name).toBe(track.name)
    expect(view.duration).toBe(track.duration)
    expect(view.times_played).toBe(track.times_played)
    expect(view.artist).toBe(track.artist)
    expect(view.album).toBe(track.album)
    expect(view.self).toBe(track.self)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = track.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(track.id)
    expect(view.album_id).toBe(track.album_id)
    expect(view.name).toBe(track.name)
    expect(view.duration).toBe(track.duration)
    expect(view.times_played).toBe(track.times_played)
    expect(view.artist).toBe(track.artist)
    expect(view.album).toBe(track.album)
    expect(view.self).toBe(track.self)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
