import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";

export default function SpaceEducation({ education }) {
  const stateColor = education.state === "In Process" ? "text-blue-500" : "text-green-500";

  return (
    <Card className="text-white bg-gray-800">
        
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md font-bold">{education.title}</p>
          <p className="text-small">{education.type}</p>
        </div>
      </CardHeader>

      <Divider />

      <CardBody>
        <p>{education.description}</p>
      </CardBody>

      <Divider />
      
      <CardFooter>
        <p className={`text-md font-bold ${stateColor}`}>{education.state}</p>
      </CardFooter>
    </Card>
  );
}
