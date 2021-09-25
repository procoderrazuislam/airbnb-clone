import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

const search = ({ searchResult }) => {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;
  if (!startDate) {
    return null;
  }
  if (!endDate) {
    return null;
  }
  const formattedStartDate = format(new Date(), "dd MMMM yy");
  const formattedEndDate = format(new Date(), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <>
      <div>
        <Head>
          <title>Airbnb: Vacation Rentals, Cabins, Beach Houses</title>
        </Head>
        <Header
          placeholder={`${location} | ${range} | ${numberOfGuests} guests`}
        />

        <main className="flex p-10">
          <section>
            <p className="text-xs">
              300+ Stays- {range} - for {numberOfGuests} guests
            </p>
            <h1 className="text-3xl font-semibold mt-2 mb-6">
              Satys in {location}
            </h1>

            <div className="flex mb-5 space-x-3 text-gray-800 whitespace-nowrap flex-wrap">
              <p className="button mt-5">Free cancellation</p>
              <p className="button mt-5">Type of place</p>
              <p className="button mt-5">Price</p>
              <p className="button mt-5">Instant Book</p>
              <p className="button mt-5">More filters</p>
            </div>

            <div className='flex flex-col'>
            {searchResult?.map(
              ({ description, img, location, price, star, title, total }) => (
                <InfoCard
                  key={img}
                  description={description}
                  img={img}
                  location={location}
                  price={price}
                  star={star}
                  title={title}
                  total={total}
                />
              )
            )}
            </div>
          </section>
          <section className='hidden xl:inline-flex xl:min-w-[600px] flex-grow pl-10'>
              <Map searchResult={searchResult} />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default search;

export const getServerSideProps = async () => {
  const searchResult = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResult,
    },
  };
};
