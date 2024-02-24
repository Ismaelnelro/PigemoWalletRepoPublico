
import logo from '/assets/brand/logoPigmeoL.svg'

const Loader = () => {
  return (
    <div className="w-full h-screen  flex justify-center items-center">
      <img src={logo} alt="logo pigmeo waller" className='animate-spin' />
    </div>
  )
}

export default Loader