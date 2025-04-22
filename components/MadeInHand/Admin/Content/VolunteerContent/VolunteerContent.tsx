interface VolunteerContentProps {
  volunteer: {
    form_id: string;
    first_name: string;
    last_name: string;
    motivation: string;
    why_volunteer: string;
    email: string;
    phone_number: string;
    read: boolean;
    volunteer_form_types: {
      title: string;
      description: string;
    }[];
  };
}

const VolunteerContent: React.FC<VolunteerContentProps> = ({ volunteer }) => {
  return (
    <div>
      <h2>
        {volunteer.first_name} {volunteer.last_name}
      </h2>
    </div>
  );
};
export default VolunteerContent;
