import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

const CarListing = () => {
  const [sortedCarData, setSortedCarData] = useState(carData);

  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    let sortedData = [...carData];

    sortedData = sortedData.filter((item) => {
      if (sortBy === "type2" && item.type === 2 && item.type1 === 0) {
        return true;
      } else if (sortBy === "type4" && item.type === 4 && item.type1 === 2) {
        return true;
      } else if (sortBy === "lessThan5" && item.rating < 5) {
        return true;
      } else if (sortBy === "moreThan5" && item.rating >= 5) {
        return true;
      } else {
        return false;
      }
    });

    sortedData.sort((a, b) => a.price - b.price); // Sort by price (low to high)

    setSortedCarData([...sortedData]); // Update state with sortedData array
  };

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select onChange={handleSortChange}>
                  <option>Select</option>

                  <option value="type2">2 Wheeler</option>
                  <option value="type4">4 Wheeler</option>
                  <option value="lessThan5">Rating Less than 5</option>
                  <option value="moreThan5">Rating More than 5</option>
                </select>
              </div>
            </Col>

            {sortedCarData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;