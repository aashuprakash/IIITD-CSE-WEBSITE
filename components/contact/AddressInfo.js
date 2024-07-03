function AddressInfo({ address }) {
  const addressLines = address.split(',,');
  return (
    <div className="flex flex-col gap-2">
      <div className="body-large font-bold text-primary-main">Address</div>
      {addressLines.map((line) => (
        <p key={line} className="body-small">
          {line}
        </p>
      ))}
    </div>
  );
}
export default AddressInfo;
