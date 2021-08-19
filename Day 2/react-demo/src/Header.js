import Service from './Service';

function Header() {

    const services = [
        {
            title: "Web Development",
            desc: "Occaecat enim excepteur incididunt non et velit ea magna ad id sit elit non.",
            image: "https://agreemtech.com/wp-content/uploads/2021/05/web-development.jpg"
        },
        {
            title: "Web Development",
            desc: "Occaecat enim excepteur incididunt non et velit ea magna ad id sit elit non.",
            image: "https://agreemtech.com/wp-content/uploads/2021/05/web-development.jpg"
        },
        {
            title: "Web Development",
            desc: "Occaecat enim excepteur incididunt non et velit ea magna ad id sit elit non.",
            image: "https://agreemtech.com/wp-content/uploads/2021/05/web-development.jpg"
        },
        {
            title: "Web Development",
            desc: "Occaecat enim excepteur incididunt non et velit ea magna ad id sit elit non.",
            image: "https://agreemtech.com/wp-content/uploads/2021/05/web-development.jpg"
        },
        {
            title: "Web Development",
            desc: "Occaecat enim excepteur incididunt non et velit ea magna ad id sit elit non.",
            image: "https://agreemtech.com/wp-content/uploads/2021/05/web-development.jpg"
        },
        {
            title: "Web Development",
            desc: "Occaecat enim excepteur incididunt non et velit ea magna ad id sit elit non.",
            image: "https://agreemtech.com/wp-content/uploads/2021/05/web-development.jpg"
        }
    ]


    return (
        <div>
            <h1 style={{ marginleft: "0%" }}>All Services</h1>
            <div className="container">


                {
                    services.map((service, index) => (

                        <Service key={index} title={service.title} desc={service.desc} image={service.image} />

                    ))
                }
            </div>

        </div>


    )

}


export default Header;