import { useState } from "react";

function Header(props) {
    const { title, onChangeMode } = props;
    const onClickHandler = (e) => {
        e.preventDefault();
        onChangeMode();
    };

    return (
        <header>
            <h1><a href="#" onClick={onClickHandler}>{title}</a></h1>
        </header>
    )
}

function Nav(props) {
    const { topics, onChangeMode } = props;
    const onClickHandler = (e) => {
        const { target } = e;

        e.preventDefault();
        onChangeMode(Number(target.id));
    };

    return (
        <nav>
            <ol>
                {topics?.map(topic => {
                    return (
                        <li key={topic.id}>
                            <a id={topic.id} href={`/read/${topic.id}`} onClick={onClickHandler}>
                                {topic.title}
                            </a>
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}

function Article(props) {
    const { title, body } = props;

    return (
        <article>
            <h2>{title}</h2>
            {body}
        </article>
    )
}

function Create(props) {
    const { onCreate } = props;
    const onClickHandler = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;

        onCreate(title, body);
    };

    return (
        <article>
            <h2>Create</h2>
            <form onSubmit={onClickHandler}>
                <p>
                    <input type="text" name="title" placeholder="title" />
                </p>
                <p>
                    <textarea name="body" placeholder="body"></textarea>
                </p>
                <p>
                    <input type="submit" value="Create" />
                </p>
            </form>
        </article>
    )
}

function App() {
    const [mode, setMode] = useState("WELCOME");
    const [id, setId] = useState(null);
    const [nextId, setNextId] = useState(4);
    const [topics, setTopics] = useState([
        { id: 1, title: "html", body: "html is ..." },
        { id: 2, title: "css", body: "css is ..." },
        { id: 3, title: "javascript", body: "javascript is ..." }
    ]);
    let content = null;

    const onClickHandler = (title, body) => {
        const newTopic = { id: nextId, title, body };
        const newTopics = [...topics];
        newTopics.push(newTopic);
        setTopics(newTopics);
        setMode("READ");
        setId(nextId);
        setNextId(nextId + 1);
    }

    if (mode === "WELCOME") {
        content = <Article title="Welcome" body="Hello, WEB"></Article>;
    }
    else if (mode === "READ") {
        topics.forEach(topic => {
            if (topic.id === id) {
                content = <Article title={topic.title} body={topic.body}></Article>
            }
        })
    }
    else if (mode === "CREATE") {
        content = <Create onCreate={onClickHandler}></Create>
    }

    return (
        <div>
            <Header title="WEB" onChangeMode={() => {
                setMode("WELCOME");
            }}></Header>
            <Nav topics={topics} onChangeMode={_id => {
                setMode("READ");
                setId(_id);
            }}></Nav>
            {content}
            <a href="/create" onClick={e => {
                e.preventDefault();
                setMode("CREATE");
            }}>Create</a>
        </div>
    );
}

export default App;
