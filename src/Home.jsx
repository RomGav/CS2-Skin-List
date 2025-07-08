import Header from './components/Header';
import { Outlet } from 'react-router';
import SearchResult from './components/SearchResult';

const App = () => {
  return (
    <div className='bg bg-orange-400 h-[100vh] flex items-center justify-center'>
      <div className='bg bg-gray-100 rounded-lg h-[90vh] w-[90vw] object-contain overflow-y-auto'>
        <Header />
        <main>
          <SearchResult />
          <Outlet />
        </main>
      </div>

    </div>
  )
}

export default App
