import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';

export const ANAKIN_IMAGE = "https://i.blogs.es/405758/anakin/450_1000.jpeg";
export const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

export const Post = ({ author, content, image, date}) => {
    return (
        <div className='post'>
            <div className='user_info'>
                <img className="userpic" src={author.photo} alt="user-pic"/>
                <h1> {author.name} </h1>
                <i> <FontAwesomeIcon icon={faCheckCircle} /> </i>
                <p> {author.nickname} </p>
                <span> {date} </span>
            </div>

            <div className='content'>
                <p> {content} </p>
                <img className='post_img' src={image} alt='post-img'/>
            </div>

            <div className='interaction'>
                <i> <FontAwesomeIcon icon= { faComment } /> 482 </i>
                <i> <FontAwesomeIcon icon= { faRetweet } /> 146 </i>
                <i> <FontAwesomeIcon icon= { faHeart } /> 887 </i>
                <i> <FontAwesomeIcon icon= { faShare } /> </i>
            </div>
        </div>
    );
};