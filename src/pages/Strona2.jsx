function Strona2(props)
{
    return(
        <>
            <h1>Strona 2</h1>
            <p>Nr: <input type="number" id="nr" /></p>
            <p>imię: <input type="text" id="imie" /></p>
            <p>nazwisko: <input type="text" id="nazwisko" /></p>
            <p>klasa: <input type="tekst" id="klasa" /></p>
            <button onClick={props.f}>dodaj</button>
        </>
    );
}
export default Strona2;