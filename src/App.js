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

function App() {
    const [mode, setMode] = useState("WELCOME");
    const [id, setId] = useState(null);
    const topics = [
        { id: 1, title: "html", body: "html is ..." },
        { id: 2, title: "css", body: "css is ..." },
        { id: 3, title: "javascript", body: "javascript is ..." }
    ];
    let content = null;

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
        </div>
    );
}

export default App;
