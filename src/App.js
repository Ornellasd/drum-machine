import { useState, useEffect } from 'react'
import { audioBank } from './audioClips'

const col1 = audioBank.slice(0, 3)
const col2 = audioBank.slice(3, 6)
const col3 = audioBank.slice(6)
const allCols = [col1, col2, col3]

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
    if(document.querySelector(`#${event.key}`).currentTime > 0) {
      document.querySelector(`#${event.key}`).currentTime = 0
    }
    setBeat('')
  }

  const handleMouseDown = (clip) => {
    document.querySelector(`#${clip.keyTrigger}`).play()
    setBeat(clip)
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
              onMouseDown={() => handleMouseDown(clip)}
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