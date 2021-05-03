import { Album } from '.'

let album

beforeEach(async () => {
  album = await Album.create({ artist_id: 'test', name: 'test', genre: 'test', artists: 'test', tracks: 'test', self: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = album.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(album.id)
    expect(view.artist_id).toBe(album.artist_id)
    expect(view.name).toBe(album.name)
    expect(view.genre).toBe(album.genre)
    expect(view.artists).toBe(album.artists)
    expect(view.tracks).toBe(album.tracks)
    expect(view.self).toBe(album.self)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = album.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(album.id)
    expect(view.artist_id).toBe(album.artist_id)
    expect(view.name).toBe(album.name)
    expect(view.genre).toBe(album.genre)
    expect(view.artists).toBe(album.artists)
    expect(view.tracks).toBe(album.tracks)
    expect(view.self).toBe(album.self)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
