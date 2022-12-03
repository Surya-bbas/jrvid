import React from 'react'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Box} from '@mui/material'
import './index.css'

import Feed from './components/Feed'
import VedioDetail from './components/VedioDetail'
import ChannelDetail from './components/ChannelDetail'
import SearchFeed from './components/SearchFeed'
import Navbar from './components/Navbar'


const App = () => {
  return (

    <BrowserRouter>

        <Box sx={ {backgroundColor:'#000'} }>
            
            <Navbar />

            <Routes>

                <Route path='/' exact element={<Feed />}></Route>
                <Route path='/video/:id' element={ <VedioDetail /> } ></Route>
                <Route path='/channel/:id' element={<ChannelDetail />}></Route>
                <Route path='/search/:searchTerm' element={<SearchFeed />}></Route>

            </Routes>

        </Box>

    </BrowserRouter>
  )
}

export default App