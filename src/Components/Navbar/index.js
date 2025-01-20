import Context from '../../Context/Context'
import './index.css'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import {BsFilterRight} from 'react-icons/bs'
const sortbyOptions = [
  {
    optionId: 'None',
    displayText: 'None',
  },
  {
    optionId: 'A-Z',
    displayText: 'A-Z',
  },
  {
    optionId: 'Z-A',
    displayText: 'Z-A',
  },
]
const Navbar= () => {
    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme,searchinput,onchangeinput,changeSortby,activeOptionId} = value
          const f = () => {
            toggleTheme()
          }
          const onchange= (event)=>{
            onchangeinput(event)
          }
          const onChangeSortby = event => {
            changeSortby(event)
          }
          return (
            <>
              {!isDarkTheme && (
                <div className="nav">
                  <ul className="contain">
                    <h1 className="main">Users</h1>
                    <input
                      type="search"
                      value={searchinput}
                      className="search-input"
                      placeholder="Search"
                      onChange={onchange}
                    />
                  </ul>
                  <div className="sort-by-container">
                      <BsFilterRight className="sort-by-icon" />
                      <p className="sort-by">Sort by</p>
                      <select
                        className="sort-by-select"
                        value={activeOptionId}
                        onChange={onChangeSortby}
                      >
                      {sortbyOptions.map(eachOption => (
                      <option
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                      className="select-option"
                      >
                      {eachOption.displayText}
                      </option>
                      ))}
                      </select>
                    </div>
                  <button
                    className="btn"
                    type="button"
                    onClick={f}
                  >
                    <MdDarkMode className='main'/>
                  </button>
                </div>
              )}
              {isDarkTheme && (
                <div className="nav1">
                  <ul className="contain">
                    <h1 className="dark-main">Users</h1>
                    <input
                      type="search"
                      value={searchinput}
                      className="dark-search-input"
                      placeholder="Search"
                      onChange={onchange}
                    />
                  </ul>
                  <div className="sort-by-container">
                      <BsFilterRight className="dark-sort-by-icon" />
                      <p className="dark-sort-by">Sort by</p>
                      <select
                        className="dark-sort-by-select"
                        value={activeOptionId}
                        onChange={onChangeSortby}
                      >
                      {sortbyOptions.map(eachOption => (
                      <option
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                      className="dark-select-option"
                      >
                      {eachOption.displayText}
                      </option>
                      ))}
                      </select>
                    </div>
                  <button
                    className="btn"
                    type="button"
                    onClick={f}
                    data-testid="theme"
                  >
                    <CiLight className='dark-main'/>
                  </button>
                </div>
              )}
            </>
          )
        }}
      </Context.Consumer>
    )
  }

export default Navbar