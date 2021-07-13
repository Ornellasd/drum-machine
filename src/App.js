import { useState, useEffect } from 'react'

const audioBank = [
  {
    keyCode: 81,
    keyTrigger: 'q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
    color: "#9400D3"
  },
  {
    keyCode: 87,
    keyTrigger: 'w',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
    color: "#4B0082"
  },
  {
    keyCode: 69,
    keyTrigger: 'e',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
    color: "#0000FF"
  },
  {
    keyCode: 65,
    keyTrigger: 'a',
    id: 'Give Us A Light',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
    color: "green"
  },
  {
    keyCode: 83,
    keyTrigger: 's',
    id: 'Dry-Ohh',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
    color: "#00FF00"
  },
  {
    keyCode: 68,
    keyTrigger: 'd',
    id: 'Bld-H1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
    color: "#FFFF00"
  },
  {
    keyCode: 90,
    keyTrigger: 'z',
    id: 'Punchy-Kick-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
    color: "#FF7F00"
  },
  {
    keyCode: 88,
    keyTrigger: 'x',
    id: 'Side-Stick-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
    color: "#FF0000"
  },
  {
    keyCode: 67,
    keyTrigger: 'c',
    id: 'Brk-Snr',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
    color: "maroon"
  }
]

const col1 = audioBank.slice(0, 3)
const col2 = audioBank.slice(3, 6)
const col3 = audioBank.slice(6)
const allCols = [col1, col2, col3];

const App = () => {  
  const [beat, setBeat] = useState('')
  
  const handleKeyDown = (event) => {
    audioBank.forEach(clip => {
      if(event.keyCode === clip.keyCode) {
        setBeat(clip)
        document.querySelector(`#${event.key}`).play()
      }
    })
  }

  const handleKeyUp = (event) => {
    document.querySelector(`#${event.key}`).pause()
    document.querySelector(`#${event.key}`).currentTime = 0
    setBeat('')
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <div className="container">
      <h1 className="text-center">Drum Machine</h1>
      {allCols.map(col => (
        <div className="row">
          {col.map(clip => (
            <div
              className="col-sm drum-pad"
              id={clip.id}
              style={{ backgroundColor: clip.color }}
            >
              <h2>{clip.keyTrigger.toUpperCase()}</h2>
              <audio 
                src={clip.url}
                id={clip.keyTrigger}
              ></audio>
            </div>
          ))}
        </div>
      ))}
      <h4 className="text-center" id="display">{beat.id}</h4>
    </div>
  )
}

export default App