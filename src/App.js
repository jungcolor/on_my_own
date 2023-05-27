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
        onChangeMode(target.id);
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
    const topics = [
        { id: 1, title: "html", body: "html is ..." },
        { id: 2, title: "css", body: "css is ..." },
        { id: 3, title: "javascript", body: "javascript is ..." }
    ];

    return (
        <div>
            <Header title="WEB" onChangeMode={() => {
                alert("header");
            }}></Header>
            <Nav topics={topics} onChangeMode={id => {
                alert(id);
            }}></Nav>
            <Article title="Welcome" body="Hello, WEB"></Article>
        </div>
    );
}

export default App;
