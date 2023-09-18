import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    console.log('path : ', path);
    const isDavcoged = path === '/davcoged' || path === '/davcoged/email' || path === '/davcoged/createItem';
    console.log('isDavcoged : ', isDavcoged);

    const token = request.cookies.get('jwt')?.value || ''
    console.log('token', token); 

    if(isDavcoged) {
        if(token){
          console.log('nextUrl');
          const url = request.nextUrl.clone()
          return NextResponse.rewrite(url);
        }else{
            const url = request.nextUrl.clone()
            url.pathname = '/davcoged/login';
            return NextResponse.rewrite(url);
        } 
      }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
      '/davcoged',
      '/davcoged/login',
      '/davcoged/createItem', 
      '/davcoged/modifyItem', 
      '/product',
    ]
  }