import './Drama.css';
import React from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { FormatString } from '../FormatString';

function Drama(props) {

    const data=[
        {
            id: 1,
            Image: "https://i0.wp.com/dmtalkies.com/wp-content/uploads/2021/10/ezgif-7-efc8654b6919.jpg?fit=1200%2C675&ssl=1",
            Title: "After We Fell",
            Details: "As Tessa makes a life-changing decision, revelations about her family and Hardin's past threaten to derail her plans and end the couple's intense relationship.",
            Directors: "Castille Landon",
            Casts: "Josephine Langford, Hero Fiennes Tiffin, Louise Lombard"
        },
        {
            id: 2,
            Image: "https://www.thewrap.com/wp-content/uploads/2021/12/power-936x527.jpg",
            Title:  "The Power of the Dog",
            Details: "A domineering rancher responds with mocking cruelty when his brother brings home a new wife and her son, until the unexpected comes to pass.",
            Directors: "Jane Campion",
            Casts: "Benedict Cumberbatch, Kirsten Dunst, Jesse Plemons"
        },
        {
            id: 3,
            Image: "https://variety.com/wp-content/uploads/2020/10/run-sarah-paulson-kiera-allen.jpg",
            Title: "Run",
            Details: "Chloe, a teenager, is forbidden from seeing the mail and is kept in isolation. She soon starts suspecting her mother of keeping dark secrets and decides to investigate.",
            Directors: "Aneesh Chaganty",
            Casts: "Sarah Paulson, Kiera Allen, Sara Sohn"
        },
        {
            id: 4,
            Image: "https://thatshelf.com/wp-content/uploads/2020/09/Enola-Holmes-feature-image-poster.jpg",
            Title: "Enola Holmes",
            Details: "While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.",
            Directors: "Harry Bradbeer",
            Casts: "Millie Bobby Brown, Henry Cavill, Sam Claflin"
        },
        {
            id: 5,
            Image: "https://thecinemaholic.com/wp-content/uploads/2020/10/after-we-collided-release-date.png",
            Title: "After We Collided",
            Details: "Tessa finds herself struggling with her complicated relationship with Hardin; she faces a dilemma that could change their lives forever.",
            Directors: "Roger Kumble",
            Casts: "Josephine Langford, Hero Fiennes Tiffin, Dylan Sprouse"
        },
        {
            id: 6,
            Image: "https://images.indianexpress.com/2021/01/White-Tiger-review-1200.jpg",
            Title: "The White Tiger",
            Details: "A rich Indian family's ambitious driver uses his wit and cunning to escape from poverty and rise to the top as an entrepreneur.",
            Directors: "Ramin Bahrani",
            Casts: "Adarsh Gourav, Rajkummar Rao, Priyanka Chopra Jonas"
        },
        {
            id: 7,
            Image: "https://1.bp.blogspot.com/-IlnNY2OFE2A/XbxQFutYFoI/AAAAAAAARj8/XrA8YTGdTGcAV1POt1NAZ70-kgTxlfI6gCLcBGAsYHQ/s1600/Black%2Band%2BBlue1.jpg",
            Title: "Black and Blue",
            Details: "Witnessing her colleagues killing a drug dealer lands police officer Alicia West into trouble. Falsely accused of the crime, she now has to fight both the corrupt police and evil gangsters.",
            Directors: "Deon Taylor",
            Casts: "Naomie Harris, Tyrese Gibson, Frank Grillo"
        },
        {
            id: 8,
            Image: "https://www.adelaidereview.com.au/app/uploads/2020/03/FILM-The-Platform.jpg",
            Title: "The Platform",
            Details: "In the future, prisoners housed in vertical cells watch as inmates in the upper cells are fed while those below starve.",
            Directors: "Galder Gaztelu-Urrutia",
            Casts: "Ivan Massague, Zorion Eguileor, Antonia San Juan"
        },
        {
            id: 9,
            Image: "https://api.time.com/wp-content/uploads/2017/01/michael-keaton-the-founder-2.jpg",
            Title: "The Founder",
            Details: "Ray, a salesman, meets the owners of McDonald's, a burger joint in Southern California. He realises the potential of the place and decides to make it the biggest restaurant business in the world.",
            Directors: "John Lee Hancock",
            Casts: "Micheal Keaton, Nick Offerman, John Carroll Lynch"
        },
        {
            id: 10,
            Image: "https://s.studiobinder.com/wp-content/uploads/2010/03/Arrival-Video-Essay-How-to-Balance-Fear-and-Intrigue-WP.jpg",
            Title: "Arrival",
            Details: "Louise Banks, a linguistics expert, along with her team, must interpret the language of aliens who have come to Earth in a mysterious spaceship.",
            Directors: "Denis Villeneuve",
            Casts: "Amy Adams, Jeremy Renner, Forest Whitaker"
        },
        {
            id: 11,
            Image: "https://m.media-amazon.com/images/M/MV5BZDBjNmEzMmEtYjU5NS00NWM4LWE5YmEtNzQzYmIyYjQ4MDc2XkEyXkFqcGdeQXVyMzQ4MTY4Mzk@._V1_.jpg",
            Title: "Lion",
            Details: "Saroo gets separated from his family at the age of five and ends up being adopted by an Australian couple. However, 25 years later, he returns to India to search for his birth parents.",
            Directors: "Garth Davis",
            Casts: "Dev Patel, Nicole Kidman, Rooney Mara"
        },
        {
            id: 12,
            Image: "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/kcjbyelnwweestgf_1611999274.jpeg",
            Title: "The Big Short",
            Details: "In the mid-2000s, a few finance experts observe the instability in the US housing market and predict its collapse. Through their research, they discover the flaws and corruption in the system.",
            Directors: "Adam McKay",
            Casts: "Christian Bale, Steve Carell, Ryan Gosling"
        }
    ]
    
    console.log(props)

    const toDetails = (user) =>
    {
        props.history.push("/details/"+user.id+"/"+FormatString(user.Title), {itemTitle:user.Title, itemDetails:user.Details, itemImage:user.Image, itemDirectors:user.Directors, itemCasts: user.Casts});
    }

    return(
        <div className='drama'>
            <h1 className='dramaHeader'>DRAMA</h1>

            <Row gutter={10}>
                    {(data).map(user => 
                    <Col className='imageHover' onClick={() => toDetails(user)} key={user.id}>
                        <img className='dramaImage' src={user.Image} alt={user.id} />
                        <p className='dramaContent'>{user.Title}</p>
                    </Col>

            )}
            </Row>
            
        </div>

    )
}

export default Drama;