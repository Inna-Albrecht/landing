import React from 'react'

const Form2 = () => {
    return (
        <form action="#">
            <div className="headertwo">
                <div className="headertwo__textFields">
                    <select name="house-condition">
                        <option value="">What's the Condition of the house?</option>
                        <option value="volvo">First</option>
                        <option value="saab">Second</option>
                    </select>
                    <input type="text" placeholder="How many beds?" />
                    <input type="text" placeholder="And how many baths" />
                </div>
                <div className="headertwo__textFields">
                    <select name="house-condition">
                        <option value="">What's the Condition of the house?</option>
                        <option value="volvo">First</option>
                        <option value="saab">Second</option>
                    </select>
                    <input type="text" placeholder="How many beds?" />
                    <input type="text" placeholder="And how many baths" />
                </div>

                <button className="headertwo__btn" >
                    Get Offer!
                </button>
            </div>
        </form>
    )
}

export default Form2
