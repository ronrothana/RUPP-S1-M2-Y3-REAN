import Head from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';


const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>REAN</title>
        <link
          href="https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="globals.css" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" rel="stylesheet"/>
      </Head>
      <header className="header">
        <a href="#" className="logo">
          NEXUS Community
        </a>
      </header>

      <section className="home">
        <div className="home-content">
          <h1>REAN <i className="fa-brands fa-facebook"></i></h1>
          <h3>Sharing is caring!</h3>
          <p>
            This platform is built on the belief that education thrives when it
            <br /> becomes a collective effort. Everyone has something valuable
            to contribute, and through this platform, we hope to facilitate{" "}
            <br />
            meaningful learning experiences for all involved.
          </p>

          {/* Test with TailwindCSS */}
          <div className="btn-box flex gap-4 mt-10 ml-10">
            <a
              href="sign.html"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              <i className="fas fa-sign-in-alt mr-2"></i> Login
            </a>
            <a
              href="#"
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300 transform hover:scale-105"
            >
              <i className="fas fa-eye mr-2"></i> View More
            </a>
          </div>
        </div>
        <div className="home-sci">
          <a href="https://www.facebook.com/Rothanaaaa?mibextid=LQQJ4d">
          <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/rrbcdeswtd/profilecard/?igsh=am5ycXB5ODB4cHl1">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://t.me/ronrothanaa">
          <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="https://github.com/ronrothana">
          <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>

      <section className="course">
        <h1>About Us</h1>
        <p>
          Our website is a platform focused on academic growth and self-study
          for learners. We provide high-quality, well-researched content that
          supports academic success and fosters community building. <br />
          Our goal is to create a space where students in the same field can
          freely share knowledge, collaborate, and stay connected. Through this
          platform, we hope to foster a supportive network where senior and
          junior students can learn from one another and grow together.
        </p>
        <div className="row">
          <div className="course-col">
            <p>
              At REAN, we believe that each student brings unique knowledge and
              perspectives that can enrich the learning experience for others,
              turning education into a collaborative and supportive journey.
            </p>
          </div>
          <div className="course-col">
            <p>
              Our platform is designed to enable students to share valuable
              resources, insights, and guidance, creating a dynamic environment
              where self-study becomes a collective effort towards academic
              excellence.
            </p>
          </div>
          <div className="course-col">
            <p>
              By fostering connections between students within similar fields,
              we strive to cultivate a thriving network where senior and junior
              learners can uplift and learn from one another, ensuring
              continuous growth and success for all.
            </p>
          </div>
        </div>
      </section>

      <section className="campus">
        <h1>Our Motivation</h1>
        <p>
          In this community, every challenge transforms into a stepping stone,
          and every success becomes a shared celebration. Together, we learn,
          grow, and empower one another—because when we unite with a common
          purpose, there’s no dream too big and no goal out of reach!
        </p>

        <div className="row">
          <div className="campus-col">
            <img src="images/layout_img/believe.jpg" alt="Believe" />
            <div className="layer">
              <h3>Believe</h3>
            </div>
          </div>

          <div className="campus-col">
            <img src="images/layout_img/persist.jpg" alt="Persist" />
            <div className="layer">
              <h3>Persist</h3>
            </div>
          </div>

          <div className="campus-col">
            <img src="images/layout_img/success.avif" alt="Success" />
            <div className="layer">
              <h3>Succeed!</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="facilities">
        <h1>Problem Statement</h1>
        <p>
          As former first-year students, we know firsthand the challenges that
          come with starting out. Now, we’re committed to helping alleviate
          those difficulties for our younger peers.
        </p>

        <div className="row">
          <div className="facilities-col">
            <img src="images/layout_img/over.jpg" alt="Information Overload" />
            <h3>Information Overload</h3>
            <p>
              With so much information available online, students can feel
              overwhelmed and struggle to identify what’s relevant or credible
              for their specific field.
            </p>
          </div>

          <div className="facilities-col">
            <img src="images/layout_img/peer.jpg" alt="Peer Support" />
            <h3>Difficulty in Finding Peer Support</h3>
            <p>
              Many students feel isolated in their studies, especially if they
              don’t know classmates well, making it hard to find study partners
              or peer encouragement.
            </p>
          </div>

          <div className="facilities-col">
            <img src="images/layout_img/way.jpg" alt="Guidance" />
            <h3>Unclear Pathways for Academic and Career Guidance</h3>
            <p>
              Students often need tailored guidance on academic and career paths
              in their specific field, but don’t know who to turn to for
              accurate, field-relevant advice.
            </p>
          </div>
        </div>

        <div className="container-fluid">
          <div className="footer">
            <p>
              Copyright © 2024 Designed by Ron Rothana. All rights reserved.
              <br />
              <br />
              Distributed By: <a href="https://t.me/ronrothanaa">Admin</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
