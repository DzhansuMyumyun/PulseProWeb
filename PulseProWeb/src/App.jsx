import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Create from './components/Create'
import List from './components/List'
import Update from './components/Update'
import Delete from './components/Delete'
import Filter from './components/Filter'

function App() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('Create');


  const handleClick = (tabName) =>{
    setActiveTab(tabName)
  }


  return (
    <div>
      <div className="mainNav">
          <div className="navbar">

              <div className="navbar-main">
                  <nav className="mainBox">
                      <ul className="list-style-none display-flex">                
                          <li onClick={() => handleClick('Create')} className= {activeTab === 'Create' ? 'active-li':''}>Create</li>
                          <li onClick={() => handleClick('List')} className= {activeTab === 'List' ? 'active-li':''}>List</li>
                          <li onClick={() => handleClick('Update')} className= {activeTab === 'Update' ? 'active-li':''}>Update</li>
                          <li onClick={() => handleClick('Delete')} className= {activeTab === 'Delete' ? 'active-li':''}>Delete</li>
                          <li onClick={() => handleClick('Filter')} className= {activeTab === 'Filter' ? 'active-li':''}>Filter</li>
                      </ul>
                  </nav>
              </div>

          </div>
      </div>
      <div className="content">
        {activeTab === 'Create' && <Create />}
        {activeTab === 'List' && <List />}
        {activeTab === 'Update' && <Update />}
        {activeTab === 'Delete' && <Delete />}
        {activeTab === 'Filter' && <Filter />}
      </div>
    </div>

  )
}

export default App
