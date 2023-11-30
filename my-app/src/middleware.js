import { NextResponse, NextRequest } from 'next/server'
 
export function middleware(NextRequest) {
    const path = NextRequest.nextUrl.pathname
    const isPublicPath = path.startsWith('/profile')
    const token = NextRequest.cookies.get('token')?.value || '' //optional chaining operator is used to handle short-circuit of expression(I mean the operator helps us handling null values :D )
    console.log(`path: ${path}\npublic path: ${isPublicPath}\ntoken: ${!token}`)
    console.log(!token)
    if(isPublicPath && token){
        console.log('token available')
        return NextResponse.redirect(NextRequest.nextUrl)
    }
    if (isPublicPath && token === ''){
        console.log(new URL('/login',NextRequest.nextUrl))
        return NextResponse.redirect(new URL('/login',NextRequest.nextUrl))
    }
}
 
export const config = {
  matcher: [
    '/:path*',
  ]
}