import { Post } from './post';
import { ANAKIN_IMAGE } from './post';
import { RAY_IMAGE } from './post';
import '../styles/PostsPage.css';
import Header from './Header';


export default function PostsPage() {
    return (
        <div className="post_container">
            <Header />
            <Post author={{
                name: "Anakin Skywalker",
                photo: ANAKIN_IMAGE,
                nickname: "@dart_vader"
            }}
            content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
            image={RAY_IMAGE}
            date={"26 feb."}
            />
            
            <Post author={{
                name: "Anakin Skywalker",
                photo: ANAKIN_IMAGE,
                nickname: "@dart_vader"
            }}
            content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
            image={RAY_IMAGE}
            date={"26 feb."}
            />

            <Post author={{
                name: "Anakin Skywalker",
                photo: ANAKIN_IMAGE,
                nickname: "@dart_vader"
            }}
            content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
            image={RAY_IMAGE}
            date={"26 feb."}
            />
    </div>
  );
}