import React from "react";
import Link from "next/link";

export default function Signup() {
  return (
    <div>
      
      <h3>Sign up</h3>
      <input placeholder="username" type="text" defaultValue="Alice" /><br/>
      <input placeholder="password" type="password" defaultValue= "123456" /><br/>
      <input placeholder="verify password" type="password" defaultValue= "123456" /><br/>

      <Link href="Profile" > Sign up </Link><br />
      <Link href="Signin" >Sign in</Link>
    </div>
);}
