import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ProductsContext from './Context/ProductsContext.jsx'

createRoot(document.getElementById('root')).render(
  <ProductsContext>
    <App />
  </ProductsContext>
)
