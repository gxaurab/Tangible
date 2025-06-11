import useAuth from "../../hooks/useAuth"
import useToggle from "../../hooks/useToggle"

const Awareness3 = () => {
  const { auth, authChange } = useAuth(false)
  const { toggle, showModal, setToggle } = useToggle(false)

  const handleAuthClick = () => {
    if (!auth) {
      showModal()       // Show modal on login
    } else {
      setToggle(false)  // Hide modal on logout
    }
    authChange()
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="flex flex-col gap-4 items-center justify-center py-16">
        <h1 className="text-xl font-semibold">
          Change the Authentication state to see the conditional rendering
        </h1>

        <button 
          className="px-6 py-2 bg-amber-300 rounded-xl text-black font-medium hover:bg-amber-400 transition"
          onClick={handleAuthClick}
        >
          {auth ? "Sign Out" : "Sign In"}
        </button>
      </div>

      {auth && toggle && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center gap-4 max-w-sm w-full">
            <h1 className="text-2xl font-bold text-black">Welcome </h1>
            <p className="text-gray-700">You are now logged in.</p>
            <button  
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 transition"
              onClick={showModal}
            >
              Close Modal
            </button>
          </div>
        </div>
      )}

      {!auth && (
        <div className="text-center mt-8 text-gray-600">
          <h2>Please login to for the greeting</h2>
        </div>
      )}
    </div>
  )
}

export default Awareness3
