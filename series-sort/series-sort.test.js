const seriesSort = require('./series-sort')
const isExtensionOK = seriesSort.isExtensionOK
const isSampleFile = seriesSort.isSampleFile
const newSeriePath = seriesSort.newSeriePath

test('extension .mp4 should be OK', () => {
  expect(isExtensionOK('.mp4')).toBe(true)
})

test('extension .avi should be OK', () => {
  expect(isExtensionOK('.avi')).toBe(true)
})

test('extension .mkv should be OK', () => {
  expect(isExtensionOK('.mkv')).toBe(true)
})

test('extension .srt should be OK', () => {
  expect(isExtensionOK('.srt')).toBe(true)
})

test('extension .txt should be KO', () => {
  expect(isExtensionOK('.txt')).toBe(false)
})

test('sample file shoud be detected', () => {
  expect(isSampleFile('2.broke.girls.417.hdtv-lol.sample.mp4')).toBe(true)
})

test('fleche.4x02.IMMERSIF.mp4', () => {
  expect(newSeriePath('fleche.4x02.IMMERSIF.mp4')).toBe(
    'fleche/season04/fleche.4x02.immersif.mp4'
  )
})

test('elementaire.302.IMMERSION.mp4', () => {
  expect(newSeriePath('elementaire.302.IMMERSION.mp4')).toBe(
    'elementaire/season03/elementaire.302.immersion.mp4'
  )
})

test('Foire.du.Trone.S01E01.IMMERSE.720p.mkv', () => {
  expect(newSeriePath('Foire.du.Trone.S01E01.IMMERSE.720p.mkv')).toBe(
    'foire.du.trone/season01/foire.du.trone.s01e01.immerse.720p.mkv'
  )
})

test('marcel.agents.of.p.a.i.n.s03e19.720p.hdtv.x264-killers.[vtv].mkv', () => {
  expect(
    newSeriePath(
      'marcel.agents.of.p.a.i.n.s03e19.720p.hdtv.x264-killers.[vtv].mkv'
    )
  ).toBe(
    'marcel.agents.of.p.a.i.n/season03/marcel.agents.of.p.a.i.n.s03e19.720p.hdtv.x264.killers.[vtv].mkv'
  )
})

test('normalnatural.1119.hdtv-lol[ettv].mkv', () => {
  expect(newSeriePath('normalnatural.1119.hdtv-lol[ettv].mkv')).toBe(
    'normalnatural/season11/normalnatural.1119.hdtv.lol[ettv].mkv'
  )
})

test('normalnatural.119.hdtv-lol.720p.[ettv].mkv', () => {
  expect(newSeriePath('normalnatural.119.hdtv-lol.720p.[ettv].mkv')).toBe(
    'normalnatural/season01/normalnatural.119.hdtv.lol.720p.[ettv].mkv'
  )
})

test('Foire.du.Trone.S06E03.IMMERSIFASF.1080p/Foire.du.Trone.S06E03.IMMERSIFASF.1080p.avi', () => {
  expect(
    newSeriePath(
      'Foire.du.Trone.S06E03.IMMERSIFASF.1080p/Foire.du.Trone.S06E03.IMMERSIFASF.1080p.avi'
    )
  ).toBe('foire.du.trone/season06/foire.du.trone.s06e03.immersifasf.1080p.avi')
})

test('Splinter Cell Blacklist Shower.mp4', () => {
  expect(newSeriePath('Splinter Cell Blacklist Shower.mp4')).toBe(
    '1#ATrier/Splinter.Cell.Blacklist.Shower.mp4'
  )
})

test('House.Of.Cards.2013.S01E01.720p.BluRay.x264-DEMAND.mkv', () => {
  expect(
    newSeriePath('House.Of.Cards.2013.S01E01.720p.BluRay.x264-DEMAND.mkv')
  ).toBe(
    'house.of.cards/season01/house.of.cards.2013.s01e01.720p.bluray.x264.demand.mkv'
  )
})
