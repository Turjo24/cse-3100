import image1 from '../images/image-1.jpg';
import image2 from '../images/image-2.jpg';
import image3 from '../images/image-3.jpg';
import image4 from '../images/image-4.jpg';

export default function AboutUs() {
  const teamMembers = [
    { name: 'Sarah Johnson', role: 'Founder & Director', image: image1 },
    { name: 'Mike Williams', role: 'Head Veterinarian', image: image2 },
    { name: 'Emily Chen', role: 'Adoption Coordinator', image: image3 },
    { name: 'David Brown', role: 'Animal Care Specialist', image: image4 }
  ];

  return (
    <div className="container py-5">
      <section className="mb-5">
        <h2 className="text-center mb-4">Our Mission</h2>
        <p className="text-center">
          At Cat Haven, our mission is to provide loving homes for cats in need. We believe every cat deserves a chance at happiness and work tirelessly to match them with caring families.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-center mb-4">Our History</h2>
        <p className="text-center">
          Founded in 2015, Cat Haven began as a small shelter run by passionate volunteers. Over the years, we've grown into a leading cat adoption center, having helped over 1,000 cats find their forever homes.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-center mb-4">Our Team</h2>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-3 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-circle mb-3"
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'cover'
                }}
              />
              <h5>{member.name}</h5>
              <p className="text-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}