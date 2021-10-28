import React from 'react'

const Form2 = () => {
    return (
        <div className="headertwo">
            <form action="#">
                <div className="headertwo__textFields">
                    <select name="house-condition">
                        <option value="">What's the Condition of the house?</option>
                        <option style={{ backgroundColor: "transparent !important" }} value="volvo">First</option>
                        <option value="saab">Second</option>
                    </select>
                    <input type="text" placeholder="How many beds?" />
                    <input type="text" placeholder="And how many baths" />
                </div>
                <div className="headertwo__textFields">
                    <input
                        type="text"
                        placeholder="What's the Condition of the house?"
                    />
                    <input type="text" placeholder="How many beds?" />
                    <input type="text" placeholder="And how many baths" />
                </div>

                <button className="headertwo__btn" >
                    Get Offer!
                </button>
            </form>
        </div>
    )
}

export default Form2
