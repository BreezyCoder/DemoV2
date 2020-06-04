import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

export const Counters = () => {
  const [counters, setCounters] = useState([0]);
  const setCount = (index, newCounter) => {
    const newCounters = Object.assign([], counters);
    newCounters[index] = newCounter;
    setCounters(newCounters);
  };

  return (
    <>
      {counters.map((counter, index) => (
        <Counter index={index} counter={counter} setCount={setCount} />
      ))}
    </>
  );
};

const Counter = ({ index, counter, setCount }) => {
  return (
    <>
      <InputGroup size="lg">
        <InputGroup.Prepend>
          <Button
            variant="danger"
            onClick={() => {
              if (counter > 0) {
                setCount(index, counter - 1);
              } else {
                return null;
              }
            }}
          >
            -
          </Button>
        </InputGroup.Prepend>
        <FormControl value={counter} />
        <InputGroup.Append>
          <Button
            variant="success"
            onClick={() => setCount(index, counter + 1)}
          >
            +
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  );
};
