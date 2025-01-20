import { BrowserRouter , Routes, Route} from 'react-router-dom';

import {Component} from 'react'

import Home from './Components/Home'
import NotFound from './Components/NotFound';
import Context from './Context/Context'
import './App.css'
import UserDetails from './Components/UserDetails';
import { useParams } from 'react-router-dom';

function withRouter(Component) {
  return (props) => {
    const params = useParams();
    return <Component {...props} params={params} />;
  };
}

class App extends Component {
  state = {
    activeOptionId:'',
    itemsperpage:10,
    isDarkTheme: false,
    userlist:[],
    initail:[],
    searchinput: '',
    loading: false,
    userdetails: {},
  }
  componentDidMount(){
    this.users()
    
  }
  
  users = async () => {
    this.setState({loading: true})
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const data = await response.json()
        const formatedUsers =data.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            website: user.website,
            address: {
              street: user.address.street,
              suite: user.address.suite,
              city: user.address.city,
              zipcode: user.address.zipcode,
              geo: {
                lat: user.address.geo.lat,
                lng: user.address.geo.lng,
              },
            },
            company: {
              name: user.company.name,
              catchPhrase: user.company.catchPhrase,
              bs: user.company.bs,
            },
          }))
        this.setState({userlist: formatedUsers,loading: false,initail: formatedUsers})
      }
  
  detail = async (id) => {
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    const User =data
    console.log(data)
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
    this.setState({userdetails: userdata})
  }
  toggleTheme = () => {
    this.setState(prev => ({isDarkTheme: !prev.isDarkTheme}))
  }
  onsearch=()=>{
    const {searchinput,userlist,initail}=this.state
    if (searchinput ===""){
      this.setState({userlist:initail})
    }else{
    const filtered = userlist.filter(x=> x.name.toLowerCase().includes(searchinput.toLowerCase()))
    this.setState({userlist: filtered})
    }
  }
  onsort=()=>{
    const {activeOptionId,userlist,initail}=this.state
    if (activeOptionId ==="A-Z"){
      this.setState({userlist: [...userlist].sort((a, b) => a.name.localeCompare(b.name))})
    }else if(activeOptionId ==="Z-A"){
      this.setState({userlist: [...userlist].sort((a, b) => b.name.localeCompare(a.name))})
    }else{
      this.setState({userlist:initail})
    }
  }
  onchangeinput = (event) => {
    this.setState({searchinput: event.target.value},this.onsearch)
  }
  changeSortby=(event)  =>{
    this.setState({activeOptionId:event.target.value},this.onsort)
  }

  render() {
    const {isDarkTheme,itemsperpage,userlist,searchinput,initail, userdetails ,activeOptionId} = this.state
    return (
      <Context.Provider
        value={{isDarkTheme,itemsperpage, toggleTheme: this.toggleTheme,detail: this.detail,changeSortby: this.changeSortby,activeOptionId, userlist,initail, userdetails, searchinput, onchangeinput: this.onchangeinput}}
      >
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/not-found" component={<NotFound/>} />
      </Routes>
    </BrowserRouter>
      </Context.Provider>
    )
  }
}

export default withRouter(App)