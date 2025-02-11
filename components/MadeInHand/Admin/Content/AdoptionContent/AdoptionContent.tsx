"use client";
import { useState, useEffect } from "react";
import { getAdoptionRequests } from "@/utils/actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AdoptionContent() {
  const [adoptionRequests, setAdoptionRequests] = useState<any[]>([]);

  useEffect(() => {
    async function fetchAdoptionRequests() {
      const requests = await getAdoptionRequests();
      setAdoptionRequests(requests);
    }

    fetchAdoptionRequests();
  }, []);
  return (
    <div className="w-full h-full">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <h1>Adoption contenue trallala</h1>
      {adoptionRequests.map((request, index) => (
        <div key={index} className="adoption-request">
          <p>Request ID: {request.adoption_form_id}</p>
          <p>
            Requester Name: {request.first_name} {request.last_name}
          </p>
          <p>Requester Email: {request.email}</p>
          <p>Animal: {request.cat.name_cat}</p>
        </div>
      ))}
    </div>
  );
}
