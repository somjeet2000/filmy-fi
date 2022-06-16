import React from 'react';
import './Comedy.css';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { FormatString } from '../FormatString';

function Comedy(props) {
    const data=[
        {
            id: 1,
            Image: "https://www.highonfilms.com/wp-content/uploads/2022/02/Badhaai-Do-2022.jpeg",
            Title: "Badhai Do",
            Details: "Instead of coming out to their families a gay man and a lesbian enter into a marriage of convenience to appease their parents. However chaos soon ensues when the woman's girlfriend comes to live with the unlikely couple.",
            Directors: "Harshavardhan Kulkarni",
            Casts: "Rajkummar Rao, Bhumi Pednekar, Apeksha Porwal"
        },
        {
            id: 2,
            Image: "https://m.media-amazon.com/images/M/MV5BMGQ0OWM3OTQtMDIwNi00ZTIyLThiMjQtZTBkZTUzZWVhNzBmXkEyXkFqcGdeQWFybm8@._V1_.jpg",
            Title: "Red Notice",
            Details: "In the world of international crime, an Interpol agent attempts to hunt down and capture the world's most wanted art thief.",
            Directors: "Rawson Marshall Thurber",
            Casts: "Dwayne Johnson, Ryan Reynolds, Gal Gadot"
        },
        {
            id: 3,
            Image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/d7c9a3d8da181b1630747604407eb7ae8b3754713ea6a0dd07d8a11dd4e6e098._UY500_UX667_RI_V_TTW_.jpg",
            Title: "Ghostbusters: Afterlife",
            Details: "When a single mother and her two children move to a new town, they soon discover they have a connection to the original Ghostbusters and the secret legacy their grandfather left behind.",
            Directors: "Jason Reitman",
            Casts: "Carrie Coon, Paul Rudd, Finn Wolfhard"
        },
        {
            id: 4,
            Image: "https://www.denofgeek.com/wp-content/uploads/2021/10/army-of-thieves-ending-explained.jpg?resize=768%2C432",
            Title: "Army of Thieves",
            Details: "In this prequel to 'Army of the Dead,' a mysterious woman recruits bank teller Dieter to assist in a heist of impossible-to-crack safes across Europe.",
            Directors: "Matthias Schweighöfer",
            Casts: "Matthias Schweighöfer, Nathalie Emmanuel, Ruby O. Fee"
        },
        {
            id: 5,
            Image: "https://m.media-amazon.com/images/M/MV5BMWQ5NWVmOWYtOWJjZC00MjU3LWFhZDctOTNjZGQ2MDRlNmNmXkEyXkFqcGdeQWRvb2xpbmhk._V1_.jpg",
            Title: "Don't Look Up",
            Details: "Two low-level astronomers must go on a giant media tour to warn mankind of an approaching comet that will destroy planet Earth.",
            Directors: "Adam McKay",
            Casts: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep"
        },
        {
            id: 6,
            Image: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRDCAlethJrCS1-arZUSsG73v1gdgbe0ztY70UJfHxB1AKXPut6L2dFYxqmV9V9KnGtm6fNZENhCdj93hB01n_EPzRxq.jpg?r=15e",
            Title: "Murder Mystery",
            Details: "A New York cop and his wife go on a European vacation to reinvigorate the spark in their marriage. A chance encounter leads to them being framed for the murder of an elderly billionaire.",
            Directors: "Kyle Newacheck",
            Casts: "Adam Sandler, Jennifer Aniston, Luke Evans"
        },
        {
            id: 7,
            Image: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABV6Ipxy_twPdZt3tHwYsnXQcWPcUwjLPHtMOzpXFNffSaVbwSU4VlPGMOxBxm8h65261PUsODpRGi4-Zvapti_RZCU4I.jpg?r=f4b",
            Title: "Love and Monsters",
            Details: "Forced to live underground after an apocalypse, a boy decides to venture out of his colony in order to reunite with his girlfriend.",
            Directors: "Michael Matthews",
            Casts: "Dylan O'Brien, Jessica Henwick, Michael Rooker"
        },
        {
            id: 8,
            Image: "https://netflixjunkie.com/wp-content/uploads/2022/01/through_my_window_ich_sehe_nur_dich.jpg",
            Title: "Through My  Window",
            Details: "Raquel has a longtime crush on her hot neighbour, Ares, whom she secretly watches but has never spoken to. Can she make Ares fall in love with her?",
            Directors: "Marçal Forés",
            Casts: "Clara Galle, Julio Peña, Guillermo Lasheras"
        },
        {
            id: 9,
            Image: "https://netflixlife.com/files/image-exchange/2021/02/ie_65331.jpeg",
            Title: "I Care a Lot",
            Details: "A shady legal guardian lands in hot water when she tries to bilk a woman who has ties to a powerful gangster.",
            Directors: "J Blakeson",
            Casts: "Rosamund Pike, Peter Dinklage, Eiza González"
        },
        {
            id: 10,
            Image: "https://media.newyorker.com/photos/624c859c1cb684e1ddfebb1f/master/pass/Brody-The-Bubble.jpg",
            Title: "The Bubble",
            Details: "Sneaking out. Hooking up. Melting down. The cast and crew of a blockbuster action franchise attempt to shoot a sequel while quarantining at a posh hotel.",
            Directors: "Judd Apatow",
            Casts: "Harry Trevaldwyn, Samson Kayo, Peter Serafinowicz"
        },
        {
            id: 11,
            Image: "https://media.vanityfair.com/photos/5b9c15c242b9d16f4545a8ef/master/pass/ASF_D10_PI_02154_R3.jpg",
            Title: "A Sample Favor",
            Details: "Stephanie, a single mother, along with Sean, Emily's husband, set out to unravel the mystery behind Emily's disappearance. However, they counter secrets much more than what they bargained for.",
            Directors: "Paul Feig",
            Casts: "Anna Kendrick, Blake Lively, Henry Golding"
        },
        {
            id: 12,
            Image: "https://cdn.flickeringmyth.com/wp-content/uploads/2018/05/Zombieland-poster-crop.jpg",
            Title: "Zombieland: Double Tap",
            Details: "Ten years after their adventure at Zombieland, survivors Tallahassee, Columbus, Wichita and Little Rock embark on a mission to slay evolved zombies while struggling with their emotional battles.",
            Directors: "Ruben Fleischer",
            Casts: "Woody Harrelson, Jesse Eisenberg, Emma Stone"
        }
    ]

    console.log(props)

    const toDetails = (user) =>
    {
        props.history.push("/details/"+user.id+"/"+FormatString(user.Title), {itemTitle:user.Title, itemDetails:user.Details, itemImage:user.Image, itemDirectors:user.Directors, itemCasts: user.Casts});
    }

    return(
        <div className='comedy'>
            <h1 className='comedyTitle'>COMEDY</h1>
            
                <Row gutter={10}>
                    {(data).map(user => 
                    <Col className='imageHover' onClick={() => toDetails(user)} key={user.id}>
                        <img className='image1' src={user.Image} alt={user.id} />
                        <p className='comedyContent'>{user.Title}</p>
                    </Col>
                    )}
                </Row>
           
            
        </div>
    )
    
}

export default Comedy;