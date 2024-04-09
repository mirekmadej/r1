function Home(props)
{
    return(
        <>
            <h1>Strona głowna</h1>
            {props.t.map( (e)=> (<p key={e.nr}>{e.nr} {e.imie} 
                {e.nazwisko} {e.klasa}</p>))}
        </>
    );
}
export default Home;