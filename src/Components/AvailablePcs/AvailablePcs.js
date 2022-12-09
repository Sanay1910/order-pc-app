import React, { useEffect, useState } from "react";
import Card from "../../UI/Card";
import classes from "./AvailablePcs.module.css";
import ComputerItem from "../ComputerItem/ComputerItem";

function AvailablePcs() {
  const [computers, setComputers] = useState([]);
  const [isError, setIsError] = useState();
  useEffect(() => {
    const fetchComputers = async () => {
      const response = await fetch(
        "https://react-http-972b4-default-rtdb.europe-west1.firebasedatabase.app/computers.json"
      );

      const responseData = await response.json();
      const loadedData = [];

      for (const key in responseData) {
        loadedData.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setComputers(loadedData);
    };
    fetchComputers().catch((error) => {
      setIsError(error.message);
    });
  }, []);
  const computersList = computers.map((computer) => (
    <ComputerItem
      key={computer.id}
      id={computer.id}
      name={computer.name}
      descryption={computer.description}
      price={computer.price}
    />
  ));

  if (isError) {
    return (
      <section className={classes.computersError}>
        <p>{isError}</p>
      </section>
    );
  }
  return (
    <section className={classes.computers}>
      <Card>
        <ul>{computersList}</ul>
      </Card>
    </section>
  );
}

export default AvailablePcs;
