interface EventCardProps {
  title: string;
  date: string;
  description?: string;
  location?: string;
}

export default function EventCard({
  title,
  date,
  description,
  location,
}: EventCardProps) {
  return (
    <div>
      <h1>EventCard</h1>
      <p>{title}</p>
      <p>{date}</p>
      <p>{description}</p>
      <p>{location}</p>
    </div>
  );
}
