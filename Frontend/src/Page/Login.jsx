function Login() {
    return (
        <>
            <div className="w-screen h-screen bg-slate-500 flex justify-center items-center">
                <div className=""></div>
                <div className="avatar"></div>
                <form action="" className="w-[600px] h-[500px] bg-white shadow-md px-8 pt-6 pb-8 mt-8">
                    <h1 className="text-2xl text-center font-bold">Sign in</h1>
                    <label htmlFor="email" className="block m-2">Email or Phone</label>
                    <input type="text" name="email" id="email" className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight" />
                    <label htmlFor="password" className="block m-2">Password</label>
                    <input type="password" name="password" id="password" className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight" />
                    <button className="w-full mt-9 py-2 px-4 bg-gray-200 text-white font-bold rounded-2xl hover:bg-blue-500" >Login</button>
                    <div className="mt-6 text-center"><p>By continuing, you agree to the <a href="" className="underline">Terms of use</a> and <a href="" className="underline">Privacy Policy</a></p></div>
                    <div className="flex justify-between mt-9">
                        <a href="" className="underline">Other issue with sign in</a>
                        <a href="" className="underline">Forgot password</a>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;

