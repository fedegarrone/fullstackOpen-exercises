import { useEffect,useState } from 'react'

function App() {
  const [enabled, setEnable] = useState(false)

  useEffect(() => {
    console.log('efecto', { enabled })
    
    const handleMove = (event) =>{
      const { clientX, clientY } = event
      console.log({clientX,clientY})
      }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    
  },[enabled])

  const handleClick = () => {
    setEnable(!enabled)
  }

  return (
    <main>
      <div style={{
        position: 'aboslute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvent: 'none',
        left: -20,
        right: -20,
        width: 40,
        height: 40
      }} />
      <h1>Proyecto 3 - Mouse Follower</h1>
      <button onClick={handleClick}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </main>
    )
}

export default App
