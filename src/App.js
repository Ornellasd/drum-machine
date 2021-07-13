import { useState, useEffect } from 'react'

const audioBank = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    color: "#9400D3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    color: "#4B0082"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    color: "#0000FF"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    color: "green"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    color: "#00FF00"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    color: "#FFFF00"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    color: "#FF7F00"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    color: "#FF0000"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    color: "maroon"
  }
]

const col1 = audioBank.slice(0, 3)
const col2 = audioBank.slice(3, 6)
const col3 = audioBank.slice(6)
const allCols = [col1, col2, col3];

const App = () => {  
  const [clipName, setClipName] = useState('')
  
  const handleKeyDown = (event) => {
    audioBank.forEach(clip => {
      if(event.keyCode === clip.keyCode) {
        setClipName(clip.id)
        document.querySelector(`#${clip.keyTrigger}`).play()
      }
    })
  }

  const handleKeyUp = () => {
    setClipName('')
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
              <h2>{clip.keyTrigger}</h2>
              <audio 
                src={clip.url}
                id={clip.keyTrigger}
              ></audio>
            </div>
          ))}
        </div>
      ))}
      <h4 className="text-center" id="display">{clipName}</h4>
    </div>
  )
}

export default App