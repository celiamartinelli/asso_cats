interface VolunteerContentProps {
  volunteer: {
    created_at: string;
    form_id: string;
    first_name: string;
    last_name: string;
    motivation: string;
    why_volunteer: string;
    email: string;
    phone_number: string;
    read: boolean;
    volunteer_types: {
      title: string;
      description: string;
    }[];
  };
}

const VolunteerContent: React.FC<VolunteerContentProps> = ({ volunteer }) => {
  return (
    <div>
      <p className="text-sm text-zinc-600 mb-4">
        {" "}
        Demande reçue le:{" "}
        {new Date(volunteer.created_at).toLocaleDateString("fr-FR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </p>
      <div className="flex flex-col border-b border-gray-300 pb-4 mb-4">
        <h2>
          <strong>
            {volunteer.first_name} {volunteer.last_name}
          </strong>
        </h2>
        <p>
          <strong>Email:</strong> {volunteer.email}
        </p>
        <p>
          <strong>Téléphone:</strong> {volunteer.phone_number}
        </p>
      </div>
      <div className="flex flex-col border-b border-gray-300 pb-4 mb-4">
        <p>
          <strong>Motivation:</strong> {volunteer.motivation}
        </p>
        <p>
          <strong>Pourquoi être bénévole:</strong> {volunteer.why_volunteer}
        </p>
      </div>
      {/* <p>
        <strong>Lu:</strong> {volunteer.read ? "Oui" : "Non"}
      </p> */}
      <div>
        <h3>
          <strong>Types de bénévolat:</strong>
        </h3>
      </div>
      <ul>
        {volunteer.volunteer_types.map((type, index) => (
          <li key={index}>{type.title} </li>
        ))}
      </ul>
    </div>
  );
};
export default VolunteerContent;
