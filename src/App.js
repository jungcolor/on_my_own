function Header(props) {
    const { title } = props;

    return (
        <header>
            <h1><a href="#">{title}</a></h1>
        </header>
    )
}

function Nav(props) {
    const { topics } = props;

    return (
        <nav>
            <ol>
                {topics?.map(topic => {
                    return <li key={topic.id}><a href={`/read/${topic.id}`}>{topic.title}</a></li>
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
            <Header title="REACT"></Header>
            <Nav topics={topics}></Nav>
            <Article title="Welcome" body="Hello, WEB"></Article>
        </div>
    );
}

export default App;
