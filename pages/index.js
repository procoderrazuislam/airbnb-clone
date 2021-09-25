import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

const index = ({ exploreData, cardData }) => {
  return (
    <>
      <div>
        <Head>
          <meta name="description" content="Air Bnb Clone" />
          <meta
            name="keywords"
            content="HTML,Tailwind CSS,,JavaScript,React.js, Next.js "
          />
          <meta name="author" content="Razu Islam" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Airbnb: Vacation Rentals, Cabins, Beach Houses</title>
        </Head>
        {/* Header */}
        <Header />

        {/* Banner */}
        <Banner />

        <main className="max-w-7xl mx-auto px-8 sm:px-16">
          <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

            {/* call api  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {exploreData?.map((item) => (
                <SmallCard
                  key={item.img}
                  img={item.img}
                  distance={item.distance}
                  location={item.location}
                />
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-4xl font-semibold py-8">Live Anyway</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-3 -ml-3">
              {cardData?.map((item) => (
                <MediumCard key={item.img} img={item.img} title={item.title} />
              ))}
            </div>
          </section>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="Try hosting"
            description="Earn extra income and unlock new opportunities by sharing your space."
            buttonText="Learn More"
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default index;

export const getStaticProps = async () => {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardData,
    },
  };
};
