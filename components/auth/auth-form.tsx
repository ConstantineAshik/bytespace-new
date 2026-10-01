"use client";
import Link from 'next/link';
import {useState} from 'react';
import AssetImage from '@/components/ui/asset-image';
export default function AuthForm({signup=false}:{signup?:boolean}) {
 const [message,setMessage]=useState('');
 const fields=signup?[{name:'name',label:'Full Name',type:'text',placeholder:'Jamie Davis',autoComplete:'name'},{name:'email',label:'Email',type:'email',placeholder:'designer@example.com',autoComplete:'email'},{name:'password',label:'Password',type:'password',placeholder:'********',autoComplete:'new-password'}]:[{name:'email',label:'Email',type:'email',placeholder:'designer@example.com',autoComplete:'email'},{name:'password',label:'Password',type:'password',placeholder:'********',autoComplete:'current-password'}];
 return <section className={`auth-card ${signup?'signup-card':'login-card'}`} aria-labelledby="auth-title"><div className="auth-card-content"><div className="auth-heading"><p>{signup?'Create an Account':'Sign In'}</p><h1 id="auth-title">{signup?'Welcome to ByteSpace':'Welcome Back'}</h1></div>
 <form className="auth-form" onSubmit={event=>{event.preventDefault();setMessage(signup?'Your details are valid. Account creation is a frontend demo.':'Your details are valid. Sign in is a frontend demo.');}}>
 {fields.map(field=><label className="auth-field" key={field.name}>{field.label}<input name={field.name} type={field.type} placeholder={field.placeholder} autoComplete={field.autoComplete} required minLength={field.name==='password'?8:field.name==='name'?2:undefined}/></label>)}
 <button className="auth-submit" type="submit">{signup?'Continue':'Sign In'}</button>
 </form>
 {!signup&&<div className="auth-social"><div className="auth-separator"><span/>or<span/></div><div className="auth-social-buttons">{[{name:'Facebook',src:'google-auth'},{name:'Google',src:'facebook-auth'}].map(provider=><button key={provider.name} type="button" aria-label={`Sign in with ${provider.name}`} onClick={()=>setMessage(`${provider.name} sign in requires a connected authentication provider. This is a frontend demo.`)}><AssetImage src={`/assets/${provider.src}.svg`} width={72} height={72} alt=""/></button>)}</div></div>}
 {message&&<p className="auth-message" role="status">{message}</p>}
 <p className="auth-switch">{signup?'Already have an account?':'New user?'} <Link href={signup?'/login':'/signup'}>{signup?'Login':'Create an account'}</Link></p>
 </div></section>;
}
