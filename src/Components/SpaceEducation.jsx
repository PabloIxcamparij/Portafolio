import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";

export default function SpaceEducation({ education }) {
  const stateColor =
    education.state === "In Process" ? "text-blue-500" : "text-green-500";

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

      {education.type == "Certificate" && (
        <Accordion>
          <AccordionItem
            key="1"
            title={<h1 className="text-white">Certificate </h1>}
            textValue="Skills list"
            className="flex items-center flex-col m-2"
          >
            <Image alt="Certificate" src={education.img} />
          </AccordionItem>
        </Accordion>
      )}
    </Card>
  );
}
