import React from 'react';
import { Heart, Shield, Users, Accessibility, Info, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * About page
 *
 * This page tells the story of National Disability Aid using content provided
 * directly by the organisation. It highlights why NDAid exists, explains
 * what hidden disabilities are, shares the organisation’s mission and vision,
 * and presents its core values. Bold text is used to draw attention to key
 * messages. The design uses cards, icons and subtle backgrounds to create a
 * clean, modern layout that remains consistent with the rest of the site.
 */
const About: React.FC = () => {
  // Values pulled from the "Our values" section of the provided text. Each
  // entry contains an icon component, a heading and the exact description
  // from the source. Bold portions will be rendered inside the cards to
  // emphasise important ideas.
  const values = [
    {
      icon: Heart,
      title: 'Empowerment',
      description: (
        <>
          <p className="mb-2">
            <strong>We believe in giving individuals the confidence and choice to share what they wish on their own terms.</strong> National Disability Aid cards (NDAid) empower people with visible and non-visible disabilities, conditions, or chronic illnesses to navigate daily life with greater ease and assurance confidently.
          </p>
          <p>
            For others whether colleagues, team members, or members of the public, the NDAid's Cards also serves them the confidence to talk about disability respectfully. It promotes respectful, non-intrusive support by raising awareness and encouraging open, compassionate conversations around disabilities that may not be immediately apparent.
          </p>
        </>
      ),
    },
    {
      icon: Shield,
      title: 'Respect',
      description: (
        <>
          <p className="mb-2">
            <strong>We champion respect in every interaction we foster.</strong> This means honouring how individuals with visible and non-visible disabilities choose to navigate the world, acknowledging their unique journeys, experiences, and respecting their privacy.
          </p>
          <p>
            Respect also drives our advocacy for accessible, inclusive spaces ensuring that public environments are not only physically accessible but emotionally welcoming. To us, respect is about recognising each person's dignity, choices, and the value they bring to our communities.
          </p>
        </>
      ),
    },
    {
      icon: Users,
      title: 'Inclusion',
      description: (
        <>
          <p className="mb-2">
            <strong>Inclusion is at the heart of everything we do.</strong> We embrace diversity and are committed to building environments where every individual whether living with a visible or non-visible disability feels welcomed, respected, and supported.
          </p>
          <p>
            True inclusion goes beyond physical accessibility. It means creating opportunities for meaningful participation in all areas of life – social, professional, and public – ensuring no one is left out or overlooked.
          </p>
        </>
      ),
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Dubai_Skyline_mit_Burj_Khalifa_(cropped).jpg/960px-Dubai_Skyline_mit_Burj_Khalifa_(cropped).jpg"
          alt="Dubai skyline"
          className="absolute inset-0 w-full h-96 md:h-[28rem] object-cover"
        />
        <div className="relative z-10 flex flex-col items-start justify-center h-96 md:h-[28rem] px-4 md:px-16 bg-black/50 text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">About Us</h1>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl">
            Welcome to National Disability Aid. At National Disability Aid, we understand that people with disabilities and their carers often face challenges in accessing the support and services they deserve. Our mission is to simplify this process and provide individuals with disabilities and their carers with essential identification that grants access to exclusive benefits, discounts, and facilities.
          </p>
        </div>
        {/* UAE flag accent bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 flex">
          <div className="flex-1 bg-uae-red"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-uae-black"></div>
          <div className="flex-1 bg-uae-green"></div>
        </div>
      </section>

      {/* Hidden Disability Awareness Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-uae-black mb-8 text-center">Understanding Hidden Disabilities</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text content */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                <strong>Many disabilities, conditions, or long-term health issues or chronic illnesses aren't immediately visible to others.</strong> This can sometimes make it difficult for people to understand and accept that someone with a non-visible condition genuinely requires support.
              </p>
              <p>
                Often, individuals may be questioned or misunderstood simply because their disability isn't physically apparent. Wearing an NDAid card is a way to subtly let others know you might require extra help or patience – whether you're shopping, commuting, at work, or out in public.
              </p>
              <p>
                Our goal is to foster awareness, acceptance and understanding so that everyone feels confident asking for and receiving the support they need.
              </p>
            </div>
            {/* Icon or illustration */}
            <div className="flex justify-center md:justify-end">
              <Accessibility className="w-32 h-32 text-uae-green" />
            </div>
          </div>
          {/* Statistic callout */}
          <div className="mt-12 bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <Globe className="w-12 h-12 text-uae-red" />
              <p className="text-lg md:text-xl font-medium text-uae-black">
                <strong>Worldwide, around 1 in 6 people live with some form of disability – and it's estimated that up to 80% of these are non-visible.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why NDAid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-uae-black mb-8 text-center">Why We Introduced NDAid</h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                <strong>That's why we introduced the National Disability Aid (NDAid) to promote awareness, acceptance, and understanding.</strong>
              </p>
              <p>
                NDA's provide a simple way for individuals to voluntarily indicate that they have either a visible or hidden disability. By wearing an NDAid card, you're signaling that you may need a bit of extra time, help, support, understanding or patience from others.
              </p>
              <p>
                National Disability Aid is here every day of the year to support individuals with both visible and non-visible disabilities as they navigate their communities. Through awareness campaigns, business training, and personal stories, we aim to build a society that's more inclusive and compassionate.
              </p>
              <p>
                We proudly offer <strong>National Disability ID Cards</strong>, <strong>National Carer Cards</strong>, and various other services tailored to meet the unique needs of the UAE community.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Info className="w-32 h-32 text-uae-red" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Purpose Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-uae-black mb-8 text-center">Our Mission, Vision & Purpose</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission card */}
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-uae-red">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>To improve everyday experiences for individuals with both visible and hidden disabilities</strong> by fostering understanding and support in all areas of life.
              </p>
            </div>
            {/* Vision card */}
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-uae-green">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Our vision is a world where no one is excluded or left behind – a world where individuals with both visible and non-visible disabilities are recognised, respected, and actively included in every aspect of society. <strong>We believe in creating environments that are accessible, supportive, and welcoming to all.</strong>
              </p>
            </div>
            {/* Purpose card */}
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-uae-black">Our Purpose</h3>
              <p className="text-gray-700 leading-relaxed">
                At the heart of our mission is the drive to create meaningful change. We empower people living with disabilities, chronic health conditions, and other non-visible challenges to use the National Disability Aid (NDAid) to communicate their need for a little more understanding, patience, or support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-uae-black mb-8 text-center">Our Values</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, index) => {
              const IconComponent = val.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
                >
                  <IconComponent className="w-10 h-10 text-uae-green mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-uae-black">
                    {val.title}
                  </h3>
                    <div className="text-gray-700 leading-relaxed text-sm space-y-2">
                      {val.description}
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-uae-green text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Promoting an Inclusive Future</h2>
          <p className="max-w-xl mx-auto mb-8">
            At National Disability Aid, we are passionate about promoting inclusivity and equality. By offering personalised Disability ID Cards, Carer Cards, and Customer Support Cards, we ensure that individuals with disabilities and their carers receive the recognition, rights, and services they deserve.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/services"
              className="px-6 py-3 bg-white text-uae-green font-semibold rounded shadow hover:bg-gray-100 transition-colors"
            >
              Learn About Our Services
            </Link>
            <Link
              to="/apply"
              className="px-6 py-3 bg-white text-uae-red font-semibold rounded shadow hover:bg-gray-100 transition-colors"
            >
              Apply for a Card
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
