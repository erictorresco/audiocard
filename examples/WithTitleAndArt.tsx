import * as React from 'react'
import AudioCard from '../src'

export default function WithTitleAndArt() {
  return (
    <AudioCard
      title="Ep 1. - What is Criminal Justice?"
      art="https://seekjustice.fm/art300.jpg"
      source="https://dts.podtrac.com/redirect.mp3/seekjustice.fm/media/001.mp3"
      skipBackSeconds={10}
      skipForwardSeconds={30}
    />
  )
}
