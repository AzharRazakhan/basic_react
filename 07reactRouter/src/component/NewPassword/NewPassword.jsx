import { NavLink } from "react-router-dom";

export default function NewPassword() {
    return (
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto"src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
          alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">New Password</h2>
          <p className="mt-5 text-center text-sm text-gray-500">Please create a new password that you don't use on any other site.</p>
        </div>
        
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Creat New Password</label>
              <div className="mt-2">
                <input id="newPassword" name="newPassword" type="password"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
              <div className="mt-2">
                <input id="cpassword" name="confirmPassowrd" type="password"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Send Recovery Mail</button>
            </div>
          </form>
        
          <p className="mt-10 text-center text-sm text-gray-500">
            Just remember?
            <NavLink to="/signup" className="font-semibold leading-6 text-orange-600 hover:text-orange-500">Sign Up</NavLink>
          </p>
        </div>
      </div>
    );
  }
  