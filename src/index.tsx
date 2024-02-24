import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()
//
app.get('*', renderer)
//
import Top from './pages/App';
import About from './pages/About';
//
function App(){
  return(<div>func:App!</div>);
}
//
app.get('/', (c) => {
  return c.render(<Top />)
})
app.get('/test', (c) => {
  return c.html(<App />)
})
app.get('/about', (c) => {
  return c.html(<About />)
})

export default app
