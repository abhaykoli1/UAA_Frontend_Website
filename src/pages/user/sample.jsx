import { useEffect, useState } from "react";
import SampleComponent from "../../components/user/sampleComponent";
import { useNavigate } from "react-router-dom";
import { getAllSamples } from "../../api/apiSample";
import { Helmet } from "react-helmet";
import config from "../../api/config";
import axios from "axios";

const Sample = () => {
  const [samples, setSamples] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(samples);

  const navigate = useNavigate();

  useEffect(() => {
    fetchSamples();
  }, []);

  const fetchSamples = async () => {
    try {
      const response = await axios.get(`${config.API_BASE_URL}/all-sample`);
      setSamples(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching all Samples:", error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <p>Loading samples...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="bg-gradient-to-br from-blue-100/50 to-white w-full">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Samples | Uni Academic Assistance </title>
        <meta
          name="description"
          content="This is the description of my page."
        />
        <link
          rel="canonical"
          title="samples"
          href="https://uniacademicassistance.in/samples"
        />
      </Helmet>
      <div className="px-10 pt-10 pb- text-center">
        <h1 className="font-bold text-5xl  pt-7 pb-4 uppercase bg-gradient-to-r from-main to-pink-500 bg-clip-text text-transparent">
          Sample Projects
        </h1>
        <p className="text-lg line-clamp-4">
          Comprehensive Assignment Assistance With a No-AI Guarantee!
        </p>
      </div>

      <div className="pb-14 lg:px-10 md:px-8 px-5">
        <h2 className="font-bold py-7 text-4xl text-white mx-10 border-b border-gray-400">
          {/* All Services */}
        </h2>

        <div className="!grid lg:px-10 md:px-10 sm:px-4 lg:gap-8 md:gap-8 sm:gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {samples.length > 0 &&
            samples.map((sample, index) => (
              <SampleComponent key={index} sample={sample} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Sample;
