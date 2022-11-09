import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Head from 'next/head';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function SignIn() {

    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn('credentials', {
          redirect: false,
          email: e.target.email.value,
          password: e.target.password.value,
        });
        if (result.ok) {
          router.replace('/');
          return;
        }
        alert('Credential is not valid');
      };

    return (
        <>
            <div className="profile-authentication-area">
                <Link href="/">
                    <a className="navbar-brand">
                        <Image src="/images/spenco-logo.svg" alt="logo" width={200} height={70} />
                    </a>
                </Link>
                
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="signin-form">
                                <h2>Sign In</h2>

                                <form onSubmit={onSubmit}>
                                    <div className="form-group">
                                        <input id="email" name="email" type="text" className="form-control" placeholder="Username or email" />
                                    </div>

                                    <div className="form-group">
                                        <input id="password" name="password" type="password" className="form-control" placeholder="Password" />
                                    </div>

                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
                                            <p>
                                                <input type="checkbox" id="test" />
                                                <label htmlFor="test">Remember me</label>
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
                                            <a href="#" className="lost-your-password">Lost your password?</a>
                                        </div>
                                    </div>

                                    <button type="submit">Sign In</button>
                                    <span className="dont-account">Don't have an account? <Link href="/sign-up"><a>Sign Up Now!</a></Link></span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}