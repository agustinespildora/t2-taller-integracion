import { Artist } from '.'

let artist

beforeEach(async () => {
  artist = await Artist.create({ name: 'test', age: 'test', albums: 'test', tracks: 'test', self: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = artist.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(artist.id)
    expect(view.name).toBe(artist.name)
    expect(view.age).toBe(artist.age)
    expect(view.albums).toBe(artist.albums)
    expect(view.tracks).toBe(artist.tracks)
    expect(view.self).toBe(artist.self)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = artist.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(artist.id)
    expect(view.name).toBe(artist.name)
    expect(view.age).toBe(artist.age)
    expect(view.albums).toBe(artist.albums)
    expect(view.tracks).toBe(artist.tracks)
    expect(view.self).toBe(artist.self)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
