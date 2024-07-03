function ContactInfo({ phone, email, phonedept, emaildept, fax }) {
  const contactDetails = [
    { label: 'Phone(HoD):', value: phone },
    { label: 'Email(HoD):', value: email },
    { label: 'Phone(Department):', value: phonedept },
    { label: 'Email(Department):', value: emaildept },
    { label: 'Fax:', value: fax },
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="body-large font-bold text-primary-main">Contact</div>
      {contactDetails.map((detail) => (
        <p key={detail.label} className="body-small">
          {detail.label} {detail.value}
        </p>
      ))}
    </div>
  );
}
export default ContactInfo;
