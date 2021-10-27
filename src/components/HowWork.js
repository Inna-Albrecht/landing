import Headset from "../images/Headset-2.jpg";
import Headset_two from "../images/AdobeStock_127295281.jpg";
import House from "../images/buying-house-with-cash.jpg";

const HowWork = () => {
  return (
    <div>
      <div className="howwork">
        <h1 className="howwork__h1">How it works?</h1>
        <p className="howwork__p">
          The best way to sell your house easy, fast, and hassle-free
        </p>

        <div class="section group">
          <div class="col span_1_of_3">
            <img className="image__tes" src={Headset} />
            <div class="pics_content">
              <h1>STEP #1</h1>
              <p>Request your offer inmediatly</p>
            </div>
          </div>
          <div class="col span_1_of_3">
            <img className="image__tes" src={Headset_two} />
            <div class="pics_content">
              <h1>STEP #1</h1>
              <p>Request your offer inmediatly</p>
            </div>
          </div>
          <div class="col span_1_of_3">
            <img className="image__tes" src={House} />
            <div class="pics_content">
              <h1>STEP #1</h1>
              <p>Request your offer inmediatly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWork;
