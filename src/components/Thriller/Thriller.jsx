import './Thriller.css';
import React from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { FormatString } from '../FormatString';

function Thriller(props) {

    const data=[
        {
            id: 1,
            Image: "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2021/04/the-unholy-sam-raimi-movie.png?resize=1000%2C585&ssl=1",
            Title: "The Unholy",
            Details: "Alice, a girl with hearing impairment, is able to hear, speak and even heal the ill after having visions of the Virgin Mary. But when a journalist probes into the matter, he unearths a conspiracy.",
            Directors: "Evan Spiliotopoulos",
            Casts: "Jeffrey Dean Morgan, Cricket Brown, William Sadler"
        },
        {
            id: 2,
            Image: "https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2134,w_3200/https%3A%2F%2Fnetflixlife.com%2Ffiles%2Fimage-exchange%2F2021%2F10%2Fie_76071.jpeg",
            Title:  "No One Gets Out Alive",
            Details: "Desperate and without documentation, a woman from Mexico moves into a rundown Cleveland boarding house. Then the unsettling cries and eerie visions begin.",
            Directors: "Santiago Menghini",
            Casts: "Phil Robertson, Joana Borja, Victoria Alcock"
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
            Image: "https://static3.srcdn.com/wordpress/wp-content/uploads/2021/08/The-Guilty-Jake-Gyllenhaal.jpg",
            Title: "The Guilty",
            Details: "A troubled police detective demoted to 911 operator duty scrambles to save a distressed caller during a harrowing day of revelations -- and reckonings.",
            Directors: "Antoine Fuqua",
            Casts: "Jake Gyllenhaal, Riley Keough, Peter Sarsgaard"
        },
        {
            id: 5,
            Image: "https://variety.com/wp-content/uploads/2021/09/I_20201118_Unit_14677r.jpg",
            Title: "Intrusion",
            Details: "When a husband and wife move to a small town, a home invasion leaves the wife traumatized and suspicious that those around her might not be who they seem.",
            Directors: "Adam Salky",
            Casts: "Freida Pinto, Logan Marshall-Green, Robert John Burke"
        },
        {
            id: 6,
            Image: "https://m.media-amazon.com/images/M/MV5BZTEwMzk2YzctZmFlNC00MmI5LWIxMWItYzZlMWYzZmZkYzg1XkEyXkFqcGdeQXNuZXNodQ@@._V1_.jpg",
            Title: "Irul",
            Details: "Alex and Archana go on a trip but soon their car breaks down and they take shelter at a nearby house. However, things take a turn when the owner of the house behaves in a suspicious manner.",
            Directors: "Naseef Yusuf Izuddin",
            Casts: "Fahadh Faasil, Soubin Shahir, Darshana Rajendran"
        },
        {
            id: 7,
            Image: "https://m.media-amazon.com/images/M/MV5BOTBmNDk5NTYtYWI1YS00MTY2LTgzMGUtZTdjYTBlYjc0OGM4XkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg",
            Title: "The Girl on the Train",
            Details: "A recent divorcee spends her daily commute fantasizing about a seemingly perfect couple who live in a house that her train passes daily, until something shocking happens there one day.",
            Directors: "Ribhu Dasgupta",
            Casts: "Parineeti Chopra, Aditi Rao Hydari, Kirti Kulhari"
        },
        {
            id: 8,
            Image: "https://m.media-amazon.com/images/M/MV5BOTAyODUwNzU2MF5BMl5BanBnXkFtZTgwMDcxNzU4NjM@._V1_.jpg",
            Title: "The Possession of Hannah Grace",
            Details: "A demon seeks refuge in a young girl's body when she dies due to an unruly exorcism. Later, her corpse is moved to a morgue guarded by a former officer who experiences unnatural events.",
            Directors: "Diederik Van Rooijen",
            Casts: "Shay Mitchell, Grey Damon, Kirby Johnson"
        },
        {
            id: 9,
            Image: "https://i.ytimg.com/vi/H1FzmSFXsr4/maxresdefault.jpg",
            Title: "Slender Man",
            Details: "Fascinated by the Internet lore of the Slender Man, four friends attempt to summon him. However, things get out of hand when one of them mysteriously goes missing.",
            Directors: "Sylvain White",
            Casts: "Joey King, Julia Goldani Telles, Jaz Sinclair"
        },
        {
            id: 10,
            Image: "https://www.nme.com/wp-content/uploads/2021/03/texas-chainsaw-massacre.jpg",
            Title: "Texas Chainsaw Massacre",
            Details: "Influencers looking to breathe new life into a Texas ghost town encounter Leatherface, the legendary killer who wears a mask of human skin.",
            Directors: "David Blue Garcia",
            Casts: "Sarah Yarkin, Mark Burnham, Olwen Fouere, Elsie Fisher"
        },
        {
            id: 11,
            Image: "https://m.media-amazon.com/images/M/MV5BMjM5MzE1ODMyMF5BMl5BanBnXkFtZTgwNjY4MzI2NTM@._V1_.jpg",
            Title: "Hereditary",
            Details: "After her mother passes away, Annie and the rest of the family are grief-stricken. Soon, strange things start occurring and the horrifying truth about Annie's ancestry begins to come to light.",
            Directors: "Ari Aster",
            Casts: "Toni Collette, Milly Shapiro, Gabriel Byrne"
        },
        {
            id: 12,
            Image: "https://variety.com/wp-content/uploads/2021/07/army-of-the-dead.jpg",
            Title: "Army of Thieves",
            Details: "In this prequel to 'Army of the Dead', a mysterious woman recruits bank teller Dieter to assist in a heist of impossible-to-crack safes across Europe.",
            Directors: "Matthias Schweighöfer",
            Casts: "Matthias Schweighöfer, Nathalie Emmanuel, Ruby O. Fee"
        }
    ]
    
    console.log(props)

    const toDetails = (user) =>
    {
        props.history.push("/details/"+user.id+"/"+FormatString(user.Title), {itemTitle:user.Title, itemDetails:user.Details, itemImage:user.Image, itemDirectors:user.Directors, itemCasts: user.Casts});
    }

    return(
        <div className='thriller'>
            <h1 className='thrillerHeader'>THRILLER</h1>

            <Row gutter={10}>
                    {(data).map(user => 
                    <Col className='imageHover' onClick={() => toDetails(user)} key={user.id}>
                        <img className='thrillerImage' src={user.Image} alt={user.id} />
                        <p className='thrillerContent'>{user.Title}</p>
                    </Col>

            )}
            </Row>
            
        </div>

    )
}

export default Thriller;