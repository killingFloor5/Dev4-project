import React from "react";
import "../css/reservation.css"
import {Link} from "react-router-dom"

export default function Reservation({loggedIn}) {
    //TODO: if user isn't logged in you can't place a reservation
    //TODO: check if the form is filled
    //TODO: make sure that a customer can't select a date in the past
    //TODO: make sure someone is first logged in
    //TODO: insert icons at the end of the submit
    //TODO: send it to the backend

    if (!loggedIn) {
        return (
            <div className={'not-loggedin'}>
                <h2>U moet ingelogd zijn om te kunnen reserveren</h2>
                <Link to={'/login'}>
                    <button>Klik hier om in te loggen</button>
                </Link>
            </div>
        )
    }


    function submit(event) {
        alert("Reservering geplaatst!")
        event.preventDefault()
        //post the reservation
    }

    return (<div>
        <div className={"reservation-text"}>
            <h1 className={"text--header"}>Reserveren</h1>
            <p className={"text--description"}>Reserveer nu een tafel!</p>
        </div>
        <form className={"form"} onSubmit={submit}>
            <div className={"form--upper"}>
                <select className={"dropdown"}>
                    <option value={1}>1 persoon</option>
                    <option value={2}>2 personen</option>
                    <option value={4}>4 personen</option>
                    <option value={6}>6 personen</option>
                    <option value={8}>8 personen</option>
                    <option value={10}>10 personen</option>
                </select>
                <input type="date" name="date" placeholder="mm/dd/yyyy"/>
                <input type="time" name="time" placeholder="tijd"/>
                <input type="text-area" name="text" placeholder="bericht"/>
            </div>
            <h3>Voorkeuren</h3>
            <div className={"form--lower"}>
                <label>
                    Locatie:
                </label>
                <select className={"dropdown"}>
                    <option value={"binnen"}>Binnen</option>
                    <option value={"buiten"}>Buiten</option>
                </select>
                <label>
                    Verdieping:
                </label>
                <select className={"dropdown"}>
                    <option value={"1"}>1e verdieping</option>
                    <option value={"2"}>2e verdieping</option>
                </select>
                <label>
                    Type stoel:
                </label>
                <select className={"dropdown"}>
                    <option value={"stoel"}>Stoel</option>
                    <option value={"bank"}>Bank</option>
                </select>
            </div>
            <div className={"form--submit"}>
                <input type="submit" value=" Plaats reservering"/>
            </div>
        </form>
    </div>)
}


