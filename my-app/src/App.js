const Header = () => {
    return <h2>Hello world!</h2>
}

const Field = () => {
    return <input placeholder="Type here" type="text"/>
}

function Btn() {
    const text = 'Log In';
    const logged = true;

    return <button>{logged ? 'Enter' : text}</button>
}

function App() {
    return (
        <div className="App">
            <Header/>
            <Field/>
            <Btn/>
        </div>
        
    )
}

export default App;