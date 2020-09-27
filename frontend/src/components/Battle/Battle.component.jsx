import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Battle.component.scss";

const sampleData = {
  name: "Siege of Raventree",
  year: "300",
  battle_number: "37",
  attacker_king: "Joffrey/Tommen Baratheon",
  defender_king: "Robb Stark",
  attacker_1: "Bracken",
  attacker_2: "Lannister",
  attacker_3: "",
  attacker_4: "",
  defender_1: "Blackwood",
  defender_2: "",
  defender_3: "",
  defender_4: "",
  attacker_outcome: "win",
  battle_type: "siege",
  major_death: "0",
  major_capture: "1",
  attacker_size: "1500",
  defender_size: "",
  attacker_commander: "Jonos Bracken, Jaime Lannister",
  defender_commander: "Tytos Blackwood",
  summer: "0",
  location: "Raventree",
  region: "The Riverlands",
  note: "",
};
export default function BattleComponent(props) {
  const {
    searchResult: { name, attacker_1, defender_1, attacker_outcome },
  } = props;
  return (
    <Row className="mt-5 white-text">
      <Col xs={12}>
        <h1 className="w-70 mx-auto text-center">{name}</h1>
      </Col>

      <Col xs={6} className="mx-auto text-center left">
        <h1>{attacker_1}</h1>
        <h3 className="text-vs white-text">VS</h3>
        <h3>
          Outcome:
          {attacker_outcome.toLowerCase() === "win" ? (
            <span className="text-success">Won</span>
          ) : (
            <span className="text-warning">Lose</span>
          )}
        </h3>
      </Col>
      <Col xs={6} className="mx-auto text-center right">
        <h1>{defender_1}</h1>
      </Col>
    </Row>
  );
}
