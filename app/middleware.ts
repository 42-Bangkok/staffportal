import { auth } from "./auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  if (!req.auth) {
    return NextResponse.redirect(new URL("/auth/sign-in", req.url))
  }
  if (req.auth && !req.auth.user.isStaff) {
    return NextResponse.redirect(new URL("/auth/unauthorized", req.url))
  }
})

// exclude from middleware
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|auth).*)"],
}
