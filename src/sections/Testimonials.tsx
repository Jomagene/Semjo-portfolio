import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";

const testimonials = [
  {
    name: "Sakinah Musafiri",
    position: "CEO @Lamano-RDC",
    text: "Joel was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @CPRJ",
    text: "Working with Joel was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Mark Hessein",
    position: "CEO @HNG",
    text: "Joel's ability to create seamless user experiences is unmatched.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Joel is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Joel's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div>
      <p>Happy client</p>
      <h2>What Clients Say About Me</h2>
      <div>
        {testimonials.map((testimonial) => (
          <div key={testimonial.name}>
            <Image src={testimonial.avatar} alt={testimonial.name} />
            <div>{testimonial.name}</div>
            <div>{testimonial.position}</div>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
