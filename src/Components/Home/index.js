import UserCard from '../UserCard'
import './index.css'
import Navbar from '../Navbar'
import Context from '../../Context/Context'
import NotFound from '../NotFound'
const Home = () => {
      return (
      <Context.Consumer>
      {value => {
        const {isDarkTheme,userlist,searchinput,onchangeinput} = value
        const onchange= (event)=>{
          onchangeinput(event)
        }
        const len =userlist.length
        return (
          <>
          {len >0 ? <>{!isDarkTheme && <>
          <Navbar />
          <div className="container">
          <ul className="contain-mobile">
                    <h1 className="main">Users</h1>
                    <input
                      type="search"
                      value={searchinput}
                      className="search-input"
                      placeholder="Search"
                      onChange={onchange}
                    />
                  </ul>
                <ul className='user-container'>
                {userlist.map(x => (<UserCard key={x.id} details={x}/>))} 
                </ul>
            </div>
            </> 
          }
          {isDarkTheme && <>
            <Navbar />
          <div className="dark-container">
          <ul className="contain-mobile">
                    <h1 className="dark-main">Users</h1>
                    <input
                      type="search"
                      value={searchinput}
                      className="dark-search-input"
                      placeholder="Search"
                      onChange={onchange}
                    />
                  </ul>
                <ul className='user-container'>
                {userlist.map(x => (<UserCard key={x.id} details={x}/>))} 
                </ul>
            </div>
          </>}</> : <><Navbar />
          <ul className="contain-mobile">
                    <h1 className="main">Users</h1>
                    <input
                      type="search"
                      value={searchinput}
                      className="search-input"
                      placeholder="Search"
                      onChange={onchange}
                    />
                  </ul>
          <NotFound/></>}
          </>
        )
      }}
    </Context.Consumer>
      )
  }

export default Home
