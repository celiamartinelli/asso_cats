import Image from "next/image";

interface EventCardProps {
  title_event: string;
  date_start: string;
  date_end?: string;
  subject: string;
  taught_name: string;
  event_url_img: string;
  location_address: string;
}

export default function EventCard({
  title_event,
  date_start,
  date_end,
  subject,
  taught_name,
  event_url_img,
  location_address,
}: EventCardProps) {
  return (
    <div className=" p-4 shadow-md rounded-md">
      <h1>EventCard</h1>
      <p>{title_event}</p>
      <p>{date_start}</p>
      <p>{date_end}</p>
      <p>{subject}</p>
      <p>{taught_name}</p>
      <Image src={event_url_img} alt="event image" width={100} height={100} />
      <p>{location_address}</p>
    </div>
  );
}
