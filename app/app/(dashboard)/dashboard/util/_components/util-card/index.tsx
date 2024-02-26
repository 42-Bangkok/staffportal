import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IUtilCard } from "./types";
import Link from "next/link";

export const UtilCard = (props: IUtilCard) => {
  return (
    <Link href={props.url}>
      <Card>
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
        </CardHeader>
        <CardContent>{props.content}</CardContent>
      </Card>
    </Link>
  );
};
