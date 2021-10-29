import React, { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";

const Header = () => {
    const [firstFormData, setFirstFormData] = useState(null);

    return (
        <div className="header_wrapper">
            {!firstFormData ? <Form2 /> : <Form1 setFirstFormData={setFirstFormData} />}
        </div>
    );
};

export default Header;
