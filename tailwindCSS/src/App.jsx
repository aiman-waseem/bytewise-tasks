function App() {
  return (
    <>
    {/* NAVBAR COMPONNET */}
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-bold text-xl">Company Name</span>
      </div>
       <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="text-sm sm:flex-grow">
          <a href="#" className="block mt-4  sm:inline-block sm:mt-0 text-teal-200 hover:text-white "> About</a>
        </div>
       </div>
       <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="text-sm sm:flex-grow">
          <a href="#" className="block mt-4  sm:inline-block sm:mt-0 text-teal-200 hover:text-white "> Contact us</a>
        </div>
       </div>
       <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="text-sm sm:flex-grow">
          <a href="#" className="block mt-4  sm:inline-block sm:mt-0 text-teal-200 hover:text-white "> Pages</a>
        </div>
       </div>
       <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="text-sm sm:flex-grow">
          <a href="#" className="block mt-4  sm:inline-block sm:mt-0 text-teal-200 hover:text-white "> Blog</a>
        </div>
       </div>
       <div>
        <a href="#"
         className="px-4 py-2 border rounded inline-block leading-none"
        >
          
          Login
        </a>
       </div>

    </nav>
       <h1 class=" flex items-center justify-center text-3xl font-bold underline mb-20">
       practicing tailwind css properties!
    </h1>
    <button class='btn btn-blue'>Tablet</button>
    <button className='btn btn-blue'>Iphone</button>

    {/* CARD COMPONENT */}
    <div className='max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl'>
      <div >
        <img src="src/image/logo.png" alt="apple logo" class="h-20" />
      </div>
      <div className='ml-6 pt-1'> 
       <h4 className='text-xl text-gray-900'>Apple</h4>
       <p className='text-base text-gray-600'>Hey! your new iphone</p>
      </div>
    </div>

    {/* ALERT COMPONENT */}
    <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 ml-56 w-1/2 rounded relative my-5 'role='alert'>
      <strong className='font-bold'>Alert!</strong>
      <span className='block sm:inline'>Please update your password</span>
    </div>
    {/* CARD COLUMNS */}
    <div className='container mt-5'>
      {/* on medium screens and up its gonna be flexbox(making it responsive) */}
      <div className='md:flex'>
       <div className='flex-1 text-gray-700 text-center bg-gray-400 px-5 py-5 m-2 rounded'>
         <div className='lg:flex lg:items-center'>
          <div className='lg:flex-shrink-0'>
            <img className='rounded-lg lg:w-64' src="src/image/img1.webp" alt="" />
          </div>
          <div className='mt-4 lg:mt-0 lg:ml-6'>
            <div className='uppercase tracking-wider text-sm text-indigo-600 font-bold'>Networking</div>
            <a href="#" className='block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline'>Finding connections to help your business grow</a>
          </div>
         </div>
        </div>
        <div className='flex-1 text-gray-700 text-center bg-gray-400 px-5 py-5 m-2 rounded flex-wrap'>
         <div className='lg:flex lg:items-center'>
          <div className='lg:flex-shrink-0'>
            <img className='rounded-lg lg:w-64' src="src/image/img2.jpg" alt="" />
            </div>
            <div className='mt-4 lg:mt-0 lg:ml-6'>
            <div className='uppercase tracking-wider text-sm text-indigo-600 font-bold'>Networking</div>
            <a href="#" className='block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline'>Finding connections to help your business grow</a>
          </div>
         </div>
            </div>
            
      </div>
    </div>
    </>
  )
}

export default App
