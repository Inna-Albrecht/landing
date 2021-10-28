import React, { useState } from 'react'
import { usePlacesWidget } from "react-google-autocomplete";

const Form1 = ({ setFirstFormData }) => {
    const { ref } = usePlacesWidget({
        apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
        onPlaceSelected: (place) => console.log(place)
    })
    const [data, setData] = useState({
        address: "",
        name: "",
        number: ""
    });
    const onDataChange = (e) => {
        const { name, value } = e.currentTarget;
        setData((p) => ({ ...p, [name]: value }));
    }
    const isValidForm = Object.values(data).every(str => str.length > 0);

    return (
        <div className="header">
            <div className="header__content">
                <h1 className="header__content-h1">
                    Want a quick cash offer for your home?
                </h1>
                <p className="header__content-p">
                    Fill up the form to be connected with one of our agents
                </p>
            </div>
            <div className="header__textFields">
                <input ref={ref} type="text" placeholder="What's the address?" name="address" onChange={onDataChange} />
                <input type="text" placeholder="and your name?" name="name" onChange={onDataChange} />
                <input type="tel" placeholder="Phone number" name="number" onChange={onDataChange} />
                <div className="navbar__btn">
                    <button className="" onClick={() => setFirstFormData(data)}>
                        Get Offer!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Form1
