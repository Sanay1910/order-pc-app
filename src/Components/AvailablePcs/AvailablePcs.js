import React from "react";
import DUMMY_DATA from "../../dummy_computers";
import Card from "../../UI/Card";
import classes from "./AvailablePcs.module.css";
import ComputerItem from "../ComputerItem/ComputerItem";

function AvailablePcs() {
  const computersList = DUMMY_DATA.map((computer) => (
    <ComputerItem
      key={computer.id}
      id={computer.id}
      name={computer.name}
      descryption={computer.description}
      price={computer.price}
    />
  ));
  return (
    <section className={classes.computers}>
      <Card>{computersList}</Card>
    </section>
  );
}

export default AvailablePcs;
