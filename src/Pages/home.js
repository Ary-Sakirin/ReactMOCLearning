function Home() {
    return (
        <>
            <div className="container-fluid text-center text-white bg-danger d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="content">
                    <div className="container px-5">
                        <h1 className="masthead-heading mb-0" style={{ fontSize: "6rem" }}>Welcome to</h1>
                        <h2 className="masthead-subheading mb-0" style={{ fontSize: "4rem" }}>Ary Sakirin</h2>
                        <a className="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll" style={{ fontSize: "1rem" }}>Learn More</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;