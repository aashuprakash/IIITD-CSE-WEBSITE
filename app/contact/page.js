import ContactInfo from '@/components/contact/ContactInfo';
import AddressInfo from '@/components/contact/AddressInfo';
import LocationMap from '@/components/contact/LocationMap';

export default function ContactPage() {
  return (
    <div className="flex width-layout-1 padding-layout-1 flex-wrap gap-5">
      <div className="w-full flex flex-col sm:flex-row items-start gap-5 justify-between">
        <ContactInfo
          phone="+91 11 2690 7476"
          email="hod-cse@iiitd.ac.in"
          phonedept="+91 11 2690 7411"
          emaildept="admin-cse@iiitd.ac.in"
          fax="+91 11 2690 7405"
        />
        <AddressInfo address="Head of Department (HOD), Department of CSE,, 5th floor, R & D Block,, Indraprastha Institute of Information Technology Delhi,, Okhla Industrial Estate, Phase-III,, New Delhi(110020), India" />
      </div>
      <LocationMap src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7009.598874980988!2d77.26683463933135!3d28.545747537629648!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e45d85d3e3%3A0x691393414902968e!2sIIIT-Delhi%20R%26D%20Building!5e0!3m2!1sen!2sin!4v1709899741967!5m2!1sen!2sin" />
    </div>
  );
}
