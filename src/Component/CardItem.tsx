import { BadgeDelta, Card, Metric, Text, Flex } from "@tremor/react";
import { CiCircleInfo } from "react-icons/ci";


  

const CardItem = () => {
  return (
    <Card className="h-[100px] mt-[-5px]" decoration="top" decorationColor="indigo">
      <Flex justifyContent="start" alignItems="center" className="gap-2">
        <Text className="text-xl font-semibold">Total Events</Text> <CiCircleInfo className="text-xs"/>
      </Flex>
      <Flex justifyContent="start">
      <Metric>100,000</Metric>  <BadgeDelta className="text-xs" deltaType="moderateIncrease">+5.0%</BadgeDelta>
      </Flex>
     
    </Card>
  );
};

export default CardItem;
