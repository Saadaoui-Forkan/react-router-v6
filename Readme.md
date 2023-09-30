# Learning React Router Dom V6

## Installing

`    npm install react-router-dom@6`

## Active Link

`    import { NavLink } from 'react-router-dom';`
`   <nav className='navbar'>
        <NavLink
            to='/about'
            style={({ isActive }) => {
            return { color: isActive ? 'red' : 'grey' };
            }}
        >
            Home
        </NavLink>
    </nav>;`

## Navigation

`
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()

const navigateOnClick = () => {
navigate("/")
}
`

## Nested Route

`    function App() {
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
    }`
