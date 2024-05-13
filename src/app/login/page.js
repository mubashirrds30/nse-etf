'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()

  function fnLogin() {
    router.push('/pages'); // Redirects to the dashboard page
  }
  return (
    // <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    //     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    //         <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
    //         <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    //     </div>

    //     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    //         <div>
    //             <Label htmlFor="email"> Email Address<Input placeholder="Enter Email" /> </Label>
    //             {/* <Input className='mt-2' /> */}
    //         </div>

    //         <div className="mt-2">
    //             <Label htmlFor="email">Password<Input placeholder="Enter Password" text="password" /> </Label>
    //             {/* <Input className='mt-2' /> */}
    //         </div>

    //         <div className="mt-3">
    //         <Button onClick={()=>fnLogin()} variant="outline" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
    //   <LogIn className="mr-2 h-4 w-4" />Login
    // </Button>
    //         </div>

    //         <div className="mt-3">
    //             <p className="mt-10 text-center text-sm text-gray-500">
    //                 Not a member?
    //                 <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register</a>
    //             </p>
    //         </div>

    //     </div>
    // </div>
    <div className="lyt-main">
      <div className="cm-container">
        <div className="bs-modal typ-cms">
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="logo-wrap">
                <svg width="189" height="64" viewBox="0 0 189 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="NSE Logo">
                    <g id="Group 11">
                      <g id="Group 10">
                        <path id="Path 5" d="M102.283 38.0041L85.1064 10.6309H77.0273V53.3782H86.0478L85.5771 26.1609L102.598 53.3782H110.436V10.6309H101.416L102.283 38.0041Z" fill="#3A2D7D" />
                        <path id="Path 6" d="M138.207 27.4941L133.893 26.5527C130.127 25.7687 128.089 25.2164 127.226 23.8072C126.943 23.3654 126.806 22.8461 126.834 22.3224C126.805 21.7723 126.942 21.2261 127.226 20.7544C128.638 18.0816 133.03 17.9332 133.893 17.9332C135.948 17.8873 137.977 18.4038 139.76 19.4267C141.543 20.4496 143.013 21.9402 144.011 23.7374L144.403 24.3655L151.933 18.7973L151.541 18.2479C149.611 15.4853 147.021 13.2483 144.008 11.74C140.994 10.2316 137.652 9.4997 134.284 9.61057C124.244 9.61057 120.166 14.6308 118.909 16.7482C117.819 18.7161 117.252 20.9309 117.263 23.1806C117.219 25.3033 117.788 27.3937 118.9 29.2019C120.013 31.0101 121.623 32.4596 123.538 33.3771C125.443 34.3092 127.479 34.9442 129.577 35.2599L134.91 36.4359L135.852 36.6705C137.734 37.0625 140.636 37.6906 141.735 39.1027C142.142 39.7047 142.361 40.4145 142.363 41.1414C142.363 44.6709 138.441 45.5336 137.97 45.6123C137.016 45.8084 136.042 45.8872 135.069 45.8469C127.618 45.8469 124.481 42.4748 122.832 39.9639L122.44 39.4145L114.832 44.6709L115.145 45.2203C115.729 46.2463 116.441 47.1943 117.263 48.0415C120.008 50.9429 125.184 54.3952 133.893 54.3952C141.109 54.3952 145.502 51.963 147.851 49.9243C149.263 48.7551 150.387 47.2762 151.135 45.6023C151.883 43.9285 152.235 42.1048 152.164 40.2727C152.245 38.9215 152.059 37.5675 151.614 36.2887C151.17 35.01 150.477 33.8317 149.576 32.8218C146.678 29.6115 142.207 28.3568 138.207 27.4941Z" fill="#3A2D7D" />
                        <path id="Path 7" d="M166.368 45.0631V35.3373H185.348V27.2612H166.368V18.946H187.155V10.6309H157.426V53.3782H188.643V45.0631H166.368Z" fill="#3A2D7D" />
                      </g>
                      <path id="Rectangle 8" d="M32.1367 17.8398L46.2795 31.9826L32.1367 46.1255L17.9939 31.9826L32.1367 17.8398Z" fill="white" />
                      <path id="Path 8" d="M54.9069 9.41247L32.1605 0L9.41406 9.41247L32.1605 17.9667L54.9069 9.41247Z" fill="#E66F25" />
                      <path id="Path 9" d="M46.1414 32.1605L54.7699 9.41406L32.0234 17.9638L46.1414 32.1605Z" fill="#3A2E7D" />
                      <path id="Path 10" d="M32.0234 46.0359L54.7699 54.5857L46.1414 31.918L32.0234 46.0359Z" fill="#EFB41D" />
                      <path id="Path 11" d="M32.1605 17.9638L9.41406 9.41406L18.0425 32.1605L32.1605 17.9638Z" fill="#EFB41D" />
                      <path id="Path 12" d="M9.41247 9.41427C9.33377 9.33557 0 31.9617 0 31.9617L9.41247 54.5864L18.0409 32.0389L9.41247 9.41427Z" fill="#E22028" />
                      <path id="Path 13" d="M18.0425 31.918L9.41406 54.5857L32.1605 46.0359L18.0425 31.918Z" fill="#EFB41D" />
                      <path id="Path 14" d="M9.41406 54.5849L32.1605 64.0019L54.9069 54.5894L32.1605 46.0352L9.41406 54.5849Z" fill="#E22028" />
                      <path id="Path 15" d="M54.7105 9.41406L46.082 32.0402L54.7105 54.5877L64.123 32.0402L54.7105 9.41406Z" fill="#E66F25" />
                    </g>
                  </g>
                </svg>

              </div>
              <div className="bs-form typ-login">
                <div className="form-group">
                  <label className="input-label" for="login">username</label>
                  <input type="text" id="login" placeholder="" />
                </div>
                <div className="form-group">
                  <label className="input-label" for="password">Password</label>
                  <input type="password" id="password" />
                </div>
                <div className="cta">
                  <a href="#" onClick={() => fnLogin()} className="btn btn-primary">Submit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}