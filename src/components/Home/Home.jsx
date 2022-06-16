import React from 'react';
import "./Home.css";
import "react-simple-flex-grid/lib/main.css";
import 'glider-js/glider.min.css';
import Glider from 'react-glider';
import cookie from 'react-cookies';
import { FormatString } from '../FormatString';

function Home(props) {
   const data = 
    [
        {
            Number: 1,
            Name: "TOP PICKS FOR YOU",
            Content: [
                {
                    id: 1,
                    Image: "https://variety.com/wp-content/uploads/2021/07/army-of-the-dead.jpg",
                    Title: "Army of Thieves",
                    Details: "In this prequel to 'Army of the Dead', a mysterious woman recruits bank teller Dieter to assist in a heist of impossible-to-crack safes across Europe.",
                    Directors: "Matthias Schweighöfer",
                    Casts: "Matthias Schweighöfer, Nathalie Emmanuel, Ruby O. Fee"
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
                    Image: "https://www.whats-on-netflix.com/wp-content/uploads/2021/05/how-well-is-army-of-the-dead-doing-on-netflix.jpg",
                    Title: "Army of the Dead",
                    Details: "After a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble and venture into the quarantine zone in hopes of pulling off an impossible heist.",
                    Directors: "Zack Snyder",
                    Casts: "Dave Bautista, Ella Purnell, Ana de la Reguera"
                },
                {
                    id: 4,
                    Image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/fistful-of-vengeance-social-featured.jpg",
                    Title: "Fistful of Vengeance",
                    Details: "A revenge mission becomes a fight to save the world from an ancient threat when superpowered assassin Kai tracks a killer to Bangkok.",
                    Directors: "Roel Reiné",
                    Casts: "Iko Uwais, Lewis Tan, Lawrence Kao"
                },
                {
                    id: 5,
                    Image: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRDCAlethJrCS1-arZUSsG73v1gdgbe0ztY70UJfHxB1AKXPut6L2dFYxqmV9V9KnGtm6fNZENhCdj93hB01n_EPzRxq.jpg?r=15e",
                    Title: "Murder Mystery",
                    Details: "A New York cop and his wife go on a European vacation to reinvigorate the spark in their marriage. A chance encounter leads to them being framed for the murder of an elderly billionaire.",
                    Directors: "Kyle Newacheck",
                    Casts: "Adam Sandler, Jennifer Aniston, Luke Evans"
                },
                {
                    id: 6,
                    Image: "https://cdn.flickeringmyth.com/wp-content/uploads/2018/05/Zombieland-poster-crop.jpg",
                    Title: "Zombieland: Double Tap",
                    Details: "Ten years after their adventure at Zombieland, survivors Tallahassee, Columbus, Wichita and Little Rock embark on a mission to slay evolved zombies while struggling with their emotional battles.",
                    Directors: "Ruben Fleischer",
                    Casts: "Woody Harrelson, Jesse Eisenberg, Emma Stone"
                },
                {
                    id: 7,
                    Image: "https://i0.wp.com/dmtalkies.com/wp-content/uploads/2021/10/ezgif-7-efc8654b6919.jpg?fit=1200%2C675&ssl=1",
                    Title: "After We Fell",
                    Details: "As Tessa makes a life-changing decision, revelations about her family and Hardin's past threaten to derail her plans and end the couple's intense relationship.",
                    Directors: "Castille Landon",
                    Casts: "Josephine Langford, Hero Fiennes Tiffin, Louise Lombard"
                },
                {
                    id: 8,
                    Image: "https://variety.com/wp-content/uploads/2020/10/run-sarah-paulson-kiera-allen.jpg",
                    Title: "Run",
                    Details: "Chloe, a teenager, is forbidden from seeing the mail and is kept in isolation. She soon starts suspecting her mother of keeping dark secrets and decides to investigate.",
                    Directors: "Aneesh Chaganty",
                    Casts: "Sarah Paulson, Kiera Allen, Sara Sohn"
                },
                {
                    id: 9,
                    Image: "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2021/04/the-unholy-sam-raimi-movie.png?resize=1000%2C585&ssl=1",
                    Title: "The Unholy",
                    Details: "Alice, a girl with hearing impairment, is able to hear, speak and even heal the ill after having visions of the Virgin Mary. But when a journalist probes into the matter, he unearths a conspiracy.",
                    Directors: "Evan Spiliotopoulos",
                    Casts: "Jeffrey Dean Morgan, Cricket Brown, William Sadler"
                },
                {
                    id: 10,
                    Image: "https://i.ytimg.com/vi/H1FzmSFXsr4/maxresdefault.jpg",
                    Title: "Slender Man",
                    Details: "Fascinated by the Internet lore of the Slender Man, four friends attempt to summon him. However, things get out of hand when one of them mysteriously goes missing.",
                    Directors: "Sylvain White",
                    Casts: "Joey King, Julia Goldani Telles, Jaz Sinclair"
                },
                {
                    id: 11,
                    Image: "https://www.nme.com/wp-content/uploads/2021/03/texas-chainsaw-massacre.jpg",
                    Title: "Texas Chainsaw Massacre",
                    Details: "Influencers looking to breathe new life into a Texas ghost town encounter Leatherface, the legendary killer who wears a mask of human skin.",
                    Directors: "David Blue Garcia",
                    Casts: "Sarah Yarkin, Mark Burnham, Olwen Fouere, Elsie Fisher"
                },
            ],
        },
        {
            Number: 2,
            Name: "NEW ARRIVALS",
            Content: [
                {
                    id: 12,
                    Image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/03/The-Adam-Project-Was-Originally-Set-to-Star-an-Action-Icon.jpg",
                    Title: "The Adam Project",
                    Details: "After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self for a mission to save the future.",
                    Directors: "Shawn Levy",
                    Casts: "Ryan Reynolds, Walker Scobell, Mark Ruffalo"
                },
                {
                    id: 13,
                    Image: "https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/black-crab-movie-review-2022/black-crab-movie-review-2022.jpeg",
                    Title:  "Black Crab",
                    Details: "In a post-apocalyptic world, six soldiers on a covert mission must transport a mysterious package across a frozen archipelago.",
                    Directors: "Adam Berg",
                    Casts: "Noomi Rapace, Jakob Oftebro, Dar Salim"
                },
                {
                    id: 14,
                    Image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/fistful-of-vengeance-social-featured.jpg",
                    Title: "Fistful of Vengeance",
                    Details: "A revenge mission becomes a fight to save the world from an ancient threat when superpowered assassin Kai tracks a killer to Bangkok.",
                    Directors: "Roel Reiné",
                    Casts: "Iko Uwais, Lewis Tan, Lawrence Kao"
                },
                {
                    id: 15,
                    Image: "https://netflixjunkie.com/wp-content/uploads/2022/01/through_my_window_ich_sehe_nur_dich.jpg",
                    Title: "Through My  Window",
                    Details: "Raquel has a longtime crush on her hot neighbour, Ares, whom she secretly watches but has never spoken to. Can she make Ares fall in love with her?",
                    Directors: "Marçal Forés",
                    Casts: "Clara Galle, Julio Peña, Guillermo Lasheras"
                },
                {
                
                    id: 16,
                    Image: "https://media.newyorker.com/photos/624c859c1cb684e1ddfebb1f/master/pass/Brody-The-Bubble.jpg",
                    Title: "The Bubble",
                    Details: "Sneaking out. Hooking up. Melting down. The cast and crew of a blockbuster action franchise attempt to shoot a sequel while quarantining at a posh hotel.",
                    Directors: "Judd Apatow",
                    Casts: "Harry Trevaldwyn, Samson Kayo, Peter Serafinowicz"
                },
                {
                    id: 17,
                    Image: "https://www.nme.com/wp-content/uploads/2021/03/texas-chainsaw-massacre.jpg",
                    Title: "Texas Chainsaw Massacre",
                    Details: "Influencers looking to breathe new life into a Texas ghost town encounter Leatherface, the legendary killer who wears a mask of human skin.",
                    Directors: "David Blue Garcia",
                    Casts: "Sarah Yarkin, Mark Burnham, Olwen Fouere, Elsie Fisher"
                },   
            ],
        },
    ];   

    console.log(props);

    const toDetails = (subUser) =>
    {
        props.history.push("/details/"+subUser.id+"/"+FormatString(subUser.Title), {itemTitle:subUser.Title, itemDetails:subUser.Details, itemImage:subUser.Image, itemDirectors:subUser.Directors, itemCasts: subUser.Casts});
    }

    return(
        <div className='home'>
            {
                data.map((user) => {
                    return(
                        <div key={user.Number}>
                        <h1 className='homeTitle'>{user.Name}</h1>
                        <div className='homePicks'>
                            <div className='leftArrow'>
                                <i className="fa-solid fa-chevron-left"></i>
                            </div>

                            <div style={{width:'1220px'}}>
                                <Glider
                                draggable
                                hasArrows
                                //hasDots
                                slidesToShow={4}
                                slidesToScroll={4}
                                // arrows={{
                                //     prev: '.leftArrow',
                                //     next: '#rightArrow',
                                // }}
                                >
                                    {user.Content.map((subUser) => 
                                        <div className='imageHover' onClick={() => toDetails(subUser)} key={subUser.id}>
                                            <img className='image' src={subUser.Image} alt={subUser.id} />
                                            <p className='homeContent'>{subUser.Title}</p>
                                        </div>
                                    )}
                                    
                                </Glider>
                            </div>

                            <div id='rightArrow'>
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Home;