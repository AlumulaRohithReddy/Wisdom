import './index.css'
import Context from '../../Context/Context';
import { useState,useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import { BiSolidUserDetail } from "react-icons/bi";
import {TiLocation} from 'react-icons/ti'
import {FaExternalLinkAlt} from 'react-icons/fa'
import { TbWorldLongitude } from "react-icons/tb";
import { TbWorldLatitude } from "react-icons/tb";
import { FaAddressCard } from "react-icons/fa";
const UserDetails = () =>{
    const {id}=useParams()
    const [userdetails, setUserdetails] = useState({})
    const [useraddress,setaddress] = useState({})
    const [companydetails,setcompany] = useState({})
    const [usergeo,setgeo] = useState({})
        useEffect(()=>{
        const fetchData=async () => {
            const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`
            const response = await fetch(apiUrl)
            const data = await response.json()
            const User =data
            console.log(data)
            const useradd=User.address
            const usergeo=useradd.geo
            const usercompany=User.company
            const userdata=  {
              id: User.id,
              name: User.name,
              username: User.username,
              email: User.email,
              phone: User.phone,
              website: User.website,
              address: {
                street: User.address.street,
                suite: User.address.suite,
                city: User.address.city,
                zipcode: User.address.zipcode,
                geo: {
                  lat: User.address.geo.lat,
                  lng: User.address.geo.lng,
                },
              },
              company: {
                CompanyName: User.company.name,
                catchPhrase: User.company.catchPhrase,
                bs: User.company.bs,
              },
            }
            console.log(userdata)
            setUserdetails(userdata)
            setaddress(useradd)
            setcompany(usercompany)
            setgeo(usergeo)
          }
        fetchData()
},[id])
        const {name,username, email, phone,website} = userdetails
        return(
          <Context.Consumer>
          {value => {
            const {isDarkTheme} =value
            return (
              <>
              {!isDarkTheme && <div className="darki-container">
                  <div className='main-container'>
                <Link to='/' className='link'>
                <button className="button-back">Go back</button>
                </Link>
                  <h1 className='main-heading'>User Details</h1>
                  
                </div>
                  <div className="dark-detail-container">
                  <div className="job-container">
                  <div className='details'>
                  <h1 className="h">
                    <BiSolidUserDetail /> User 
                  </h1>
                      <h3 className='dark-heading'><span className='Bold'>Name:      </span>{name}</h3>
                      <h3 className='dark-heading'><span className='Bold'>Username:  </span>{username}</h3>
                      <h3 className='dark-heading'><span className='Bold'>Email: </span>{email}</h3>
                      <h3 className='dark-heading'><span className='Bold'>Phone: </span>{phone}</h3>
                  </div>
                  <div className="details">
                  <h1 className="h">
                    <FaAddressCard /> Address
                  </h1>
                  <p className="p">
                  <span className='Bold'>Street:      </span> {useraddress.street}
                  </p>
                  <p className="p">
                  <span className='Bold'>Suite:      </span> {useraddress.suite}
                  </p>
                  <p className="p">
                  <span className='Bold'>City:      </span> {useraddress.city}
                  </p>
                  <p className="p">
                  <span className='Bold'>Zipcode:      </span>{useraddress.zipcode}
                  </p>
                  
                </div>
                <div className='details'>
                  <h1 className="h">
                    <TiLocation /> Geography
                  </h1>
                  <p className="p">
                  <span className='Bold'><TbWorldLatitude/>  Latitude:      </span>  {usergeo.lat}
                  </p>
                  <p className="p">
                  <span className='Bold'><TbWorldLongitude/>  Longitute:      </span> {usergeo.lng}
                  </p>
                </div>
                  <div className="details">
                  <div className='con'>
                  <h1 className="h">Company</h1>
                  <div>
                  <a className="pa" href={`http://${website}`}>
                   Visit <FaExternalLinkAlt />
                  </a>
                  </div>
                  </div>
                  <p className="p">
                  <span className='Bold'>Name: </span>{companydetails.name}
                  </p>
                  <p className="p">
                  {companydetails.catchPhrase}
                  </p>
                  <p className="p">
                   {companydetails.bs}
                  </p>
                </div>
                  </div>
                </div>
                </div>}
              {isDarkTheme && <div className="dark-darki-container">
                <div className='main-container'>
                <Link to='/' className='link'>
                <button className="dark-button-back">Go back</button>
                </Link>
                  <h1 className='dark-main-heading'>User Details</h1>
                  
                </div>
                  <div className="detail-container">
                  <div className="dark-job-container">
                  <div className='dark-details'>
                  <h1 className="h">
                    <BiSolidUserDetail /> User 
                  </h1>
                      <h3 className='heading'><span className='dark-Bold'>Name:      </span>{name}</h3>
                      <h3 className='heading'><span className='dark-Bold'>Username:  </span>{username}</h3>
                      <h3 className='heading'><span className='dark-Bold'>Email: </span>{email}</h3>
                      <h3 className='heading'><span className='dark-Bold'>Phone: </span>{phone}</h3>
                  </div>
                  <div className="dark-details">
                  <h1 className="h">
                    <FaAddressCard /> Address
                  </h1>
                  <p className="p">
                  <span className='dark-Bold'>Street:      </span> {useraddress.street}
                  </p>
                  <p className="p">
                  <span className='dark-Bold'>Suite:      </span> {useraddress.suite}
                  </p>
                  <p className="p">
                  <span className='dark-Bold'>City:      </span> {useraddress.city}
                  </p>
                  <p className="p">
                  <span className='dark-Bold'>Zipcode:      </span>{useraddress.zipcode}
                  </p>
                  
                </div>
                <div className='dark-details'>
                  <h1 className="h">
                    <TiLocation /> Geography
                  </h1>
                  <p className="p">
                  <span className='dark-Bold'><TbWorldLatitude/>  Latitude:      </span>  {usergeo.lat}
                  </p>
                  <p className="p">
                  <span className='dark-Bold'><TbWorldLongitude/>  Longitute:      </span> {usergeo.lng}
                  </p>
                </div>
                  <div className="dark-details">
                  <div className='con'>
                  <h1 className="h">Company</h1>
                  <div>
                  <a className="pa" href={`http://${website}`}>
                   Visit <FaExternalLinkAlt className='icon'/>
                  </a>
                  </div>
                  </div>
                  <p className="p">
                  <span className='dark-Bold'>Name:      </span>{companydetails.name}
                  </p>
                  <p className="p">
                  {companydetails.catchPhrase}
                  </p>
                  <p className="p">
                   {companydetails.bs}
                  </p>
                </div>
                  </div>
                </div>
               
                </div>}
              </>)
          }}
        
            </Context.Consumer>
          )
}
export default UserDetails
