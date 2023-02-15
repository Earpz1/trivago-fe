import { Tabs } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import { HiWifi } from 'react-icons/hi'
import { TbSmokingNo } from 'react-icons/tb'
import { FaSnowflake } from 'react-icons/fa'
import { FaHotel } from 'react-icons/fa'

function PropertyTabs() {
  return (
    <Tabs defaultActiveKey="overview" id="fill-tab-example" className="mt-3">
      <Tab eventKey="overview" title="Overview">
        <div className="details-container">
          <h2>Studio Apartment</h2>
          <Rating size={20} readonly={true} initialValue={4} />
          <p className="mt-2">
            3 Bedroom studio apartment in the center of London
          </p>
          <h4>Latest Review</h4>
          <span>
            Great location and good value for money. We would stay here again.
          </span>
          <p>
            <a href="#">See all 42 reviews...</a>
          </p>
          <div className="amenities">
            <h4>Amenities</h4>

            <p>
              <span>
                <HiWifi />
              </span>
              Wi-fi
            </p>
            <p>
              <span>
                <TbSmokingNo />
              </span>
              Non-Smoking
            </p>
            <p>
              <span>
                <FaSnowflake />
              </span>
              Air Conditioning
            </p>
            <p>
              <span>
                <FaHotel />
              </span>
              24/7 Front Desk
            </p>
          </div>
        </div>
      </Tab>
      <Tab eventKey="rooms" title="Rooms">
        <div className="details-container"></div>
      </Tab>
      <Tab eventKey="location" title="Location">
        <div className="details-container"></div>
      </Tab>
    </Tabs>
  )
}

export default PropertyTabs
