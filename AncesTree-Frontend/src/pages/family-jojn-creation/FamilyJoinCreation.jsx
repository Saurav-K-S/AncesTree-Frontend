import React, { useState } from "react";
import EnterDetails from "./EnterDetails";
import OptionSelect from "./OptionSelect";
import FamilyJoin from "./FamilyJoin";
import CreateFamily from "./CreateFamily";
import FamilyHistory from "./FamilyHistory";
import UploadPhoto from "./UploadPhoto";

export default function FamilyJoinCreation() {
  const name = "John";
  const [fatherName, setFatherName] = useState();
  const [occupation, setOccupation] = useState();
  const [index, setIndex] = useState(5);
  switch (index) {
    case 0:
      return (
        <EnterDetails
          name={name}
          indexFunc={setIndex}
          fatherFunc={setFatherName}
          occupationFunc={setOccupation}
        />
      );
    case 1:
      return <OptionSelect name={name} />;
    case 2:
      return <FamilyJoin name={name} />;
    case 3:
      return <CreateFamily name={name} />;
    case 4:
      return <FamilyHistory name={name} />;
    case 5:
      return <UploadPhoto name={name} />;
  }
}
