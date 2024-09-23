import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path=request.nextUrl.pathname
  const isPublicPath=path==='/login' || path==='/register'
  const token=request.cookies.get("token")?.value ||''
  if(isPublicPath && token){
    return NextResponse.redirect(new URL('/', request.url))
  }
  if(!isPublicPath && !token){
    return NextResponse.redirect(new URL('/login', request.url))
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/register',
    '/login',
    '/blog',
    '/about',
    '/contact',
    '/createBlog',
    '/'
  ],
}

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   // Since authentication is being removed, we won't redirect the user.
//   // Simply allow access to any page.
//   return NextResponse.next();
// }

// // You can still use matcher to define the paths the middleware applies to
// export const config = {
//   matcher: [
//     '/register',
//     '/login',
//     '/blog',
//     '/about',
//     '/contact',
//     '/createBlog',
//     '/'
//   ],
// }
