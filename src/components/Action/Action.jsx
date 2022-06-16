import './Action.css';
import React from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import {FormatString} from '../FormatString';

function Action(props) {

    const data=[
        {
            id: 1,
            Image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/03/The-Adam-Project-Was-Originally-Set-to-Star-an-Action-Icon.jpg",
            Title: "The Adam Project",
            Details: "After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self for a mission to save the future.",
            Directors: "Shawn Levy",
            Casts: "Ryan Reynolds, Walker Scobell, Mark Ruffalo"
        },
        {
            id: 2,
            Image: "https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/black-crab-movie-review-2022/black-crab-movie-review-2022.jpeg",
            Title:  "Black Crab",
            Details: "In a post-apocalyptic world, six soldiers on a covert mission must transport a mysterious package across a frozen archipelago.",
            Directors: "Adam Berg",
            Casts: "Noomi Rapace, Jakob Oftebro, Dar Salim"
        },
        {
            id: 3,
            Image: "https://variety.com/wp-content/uploads/2021/07/army-of-the-dead.jpg",
            Title: "Army of Thieves",
            Details: "In this prequel to 'Army of the Dead', a mysterious woman recruits bank teller Dieter to assist in a heist of impossible-to-crack safes across Europe.",
            Directors: "Matthias Schweighöfer",
            Casts: "Matthias Schweighöfer, Nathalie Emmanuel, Ruby O. Fee"
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
            Image: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/09/10/Pictures/_06e5b642-f34a-11ea-ac5c-9be95d2c150f.jpg",
            Title: "#Alive",
            Details: "While a grisly virus ravages a Korean city, Joon-woo tries to stay safe by locking himself inside his apartment. Just as he loses hope, he discovers another survivor.",
            Directors: "Il Cho",
            Casts: "Yoo Ah-in, Park Shin-Hye, Jeon Bae-soo"
        },
        {
            id: 6,
            Image: "https://m.media-amazon.com/images/M/MV5BMGQ0OWM3OTQtMDIwNi00ZTIyLThiMjQtZTBkZTUzZWVhNzBmXkEyXkFqcGdeQWFybm8@._V1_.jpg",
            Title: "Red Notice",
            Details: "In the world of international crime, an Interpol agent attempts to hunt down and capture the world's most wanted art thief.",
            Directors: "Rawson Marshall Thurber",
            Casts: "Dwayne Johnson, Ryan Reynolds, Gal Gadot"
        },
        {
            id: 7,
            Image: "https://www.arabnews.com/sites/default/files/2020/12/05/2373676-1548656693.jpg",
            Title: "Monster Hunter",
            Details: "Captain Artemis and her group of soldiers are pulled into a world where dangerous monsters and humans co-exist. Grappled by danger, they must find a way to escape with help from a mysterious hunter.",
            Directors: "Paul W.S. Anderson",
            Casts: "Milla Jovovich, Tony Jaa, Ron Perlman"
        },
        {
            id: 8,
            Image: "https://images.immediate.co.uk/production/volatile/sites/3/2020/08/Tenet-Inception-87d8d35.jpg?quality=90&resize=620,413",
            Title: "Tenet",
            Details: "When a few objects that can be manipulated and used as weapons in the future fall into the wrong hands, a CIA operative, known as the Protagonist, must save the world.",
            Directors: "Christopher Nolan",
            Casts: "John David Washington, Robert Pattinson, Elizabeth Debicki"
        },
        {
            id: 9,
            Image: "https://variety.com/wp-content/uploads/2019/12/6-underground.jpg",
            Title: "6 Underground",
            Details: "Six individuals from all around the globe, each the very best at what they do, have been chosen not only for their skill, but for a unique desire to delete their pasts to change the future.",
            Directors: "Michael Bay",
            Casts: "Ryan Reynolds, Mélanie Laurent, Manuel Garcia-Rulfo"
        },
        {
            id: 10,
            Image: "https://www.whats-on-netflix.com/wp-content/uploads/2021/05/how-well-is-army-of-the-dead-doing-on-netflix.jpg",
            Title: "Army of the Dead",
            Details: "After a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble and venture into the quarantine zone in hopes of pulling off an impossible heist.",
            Directors: "Zack Snyder",
            Casts: "Dave Bautista, Ella Purnell, Ana de la Reguera"
        },
        {
            id: 11,
            Image: "https://www.hollywoodreporter.com/wp-content/uploads/2019/01/close_006-h_2019.jpg",
            Title: "Close",
            Details: "Hired to protect a pampered mining heiress Zoe (Sophie Nélisse), bodyguard Sam (Noomi Rapace) finds herself tangled in a deadly conspiracy. When attackers target the heiress she's protecting, battle-hardened bodyguard Sam scrambles to save her client - and teach her how to fight back.",
            Directors: "Vicky Jewson",
            Casts: "Noomi Rapace, Olivia Jewson, Abdellatif Chaouqi"
        },
        {
            id: 12,
            Image: "https://images.firstpost.com/wp-content/uploads/large_file_plugin/2019/11/1572667810_drivesocial.jpg",
            Title: "Drive",
            Details: "When a crooked government official stashes black money in the Rashtrapati Bhavan, a notorious thief and his aides set out to steal it.",
            Directors: "Tarun Mansukhani",
            Casts: "Sushant Singh Rajput, Jacqueline Fernandez, Vikramjeet Virk"
        }
    ]
    
    console.log(props);
    const toDetails = (user) =>
    {
        console.log(FormatString(user.Title))
        props.history.push("/details/"+user.id+"/"+FormatString(user.Title), {itemTitle:user.Title, itemDetails:user.Details, itemImage:user.Image, itemDirectors:user.Directors, itemCasts: user.Casts});
    }

    return(
        <div className='action'>
            <h1 className='actionHeader'>ACTION</h1>

            <Row gutter={10}>
                    {(data).map(user => 
                    <Col className='imageHover' onClick={() => toDetails(user)} key={user.id}>
                        <img className='image2' src={user.Image} alt={user.id} />
                        <p className='actionContent'>{user.Title}</p>
                    </Col>

            )}
            </Row>
            
        </div>

    )
}

export default Action;