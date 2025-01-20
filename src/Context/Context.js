import React from 'react'

const Context = React.createContext({
  activeOptionId:'',
  itemsperpage:10,
  isDarkTheme: false,
  toggleTheme: () => {},
  searchinput: "",
  onchangeinput: () => {},
  userlist: [],
  userdetails:{},
  inital:[],
  detail: () => {},
  changeSortby: () => {},
})

export default Context
