# Learning React Router Dom V6

## Installing

`npm install react-router-dom@6`

## Active Link
```
import { NavLink } from 'react-router-dom'

    <nav className='navbar'>
        <NavLink
            to='/about'
            style={({ isActive }) => {
            return { color: isActive ? 'red' : 'grey' };
            }}
        >
            Home
        </NavLink>
    </nav>;
```

## Navigation

```
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()

const navigateOnClick = () => {
navigate("/")
}
```

## Nested Route

```    function App() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}>
                        <Route path='about' element={<About />} />
                        <Route path='products' element={<Products />} />
                        <Route path='*' element={<Error />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
```

## URL Params
* App.js
` <Route path='/products/:productId' element={<SingleProduct/>}/> `
* SingleProduct.js
```
import { Link, useParams } from 'react-router-dom';
import products from '../data';
const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name } = product;
  return (
    <section className='section product'>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to='/products'>back to products</Link>
    </section>
  );
};

export default SingleProduct;
```

## Protected Route
```
    import React from 'react'
    import { Navigate } from 'react-router'

    function ProtectedRoute({children, user}) {
        if (!user) {
            return <Navigate to="/" />
        }
        return children
    }

    export default ProtectedRoute
```
* App.js
```
    <Route 
        path='/dashboard' 
        element={
        <ProtectedRoute user={ user }>
            <Dashboard user={ user }/>
        </ProtectedRoute>
        }
    />
```
