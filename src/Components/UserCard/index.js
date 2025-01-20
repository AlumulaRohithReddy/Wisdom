import { Link } from 'react-router-dom'
import './index.css'
import Context from '../../Context/Context'
const UserCard = props => {
    return (
    <Context.Consumer>
    { value => {
        const {isDarkTheme} =value
        const {details}=props
        const {id,name,email,address} = details
        const {city}=address
        return (
        <>
        {isDarkTheme && <li className="dark-user-card">
        <Link to={`/users/${id}`} className='link'>
        <h1 className='dark-heading'><span className='Bold'>Name: </span>{name}</h1>
            <h2 className='dark-email-text'><span className='Bold'>Email: </span>{email}</h2>
            {<h3 className='dark-city-text'><span className='Bold'>City: </span>{city}</h3> }
        </Link>
        </li>}
        {!isDarkTheme && <li className="user-card" >
        <Link to={`/users/${id}`} className='link'>
            <h1 className='heading'><span className='dark-Bold'>Name: </span>{name}</h1>
            <h2 className='email-text'><span className='dark-Bold'>Email: </span>{email}</h2>
            {<h3 className='city-text'><span className='dark-Bold'>City: </span>{city}</h3> }
        
        </Link>
        </li>}
        </>
        )
    }}
    </Context.Consumer>
    )
}

export default UserCard