import { useEffect, useState } from "react";
import SampleComponent from "../../components/user/sampleComponent";
import { useNavigate } from "react-router-dom";
import { getAllSamples } from "../../api/apiSample";

const Sample = () => {
  const [samples, setSamples] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const navigate = useNavigate();
  console.log(samples);

  useEffect(() => {
    const fetchSamples = async () => {
      try {
        const data = await getAllSamples();
        setSamples(data.data); // Assuming data is an array of samples
      } catch (err) {
        setError("Failed to load samples");
      } finally {
        setLoading(false);
      }
    };

    fetchSamples();
  }, []);

  if (loading) return <p>Loading samples...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <div className="px-10 pt-10 pb- text-center ">
        <h1 className="font-bold text-6xl py-7">Sample Projects</h1>
        <p className="text-lg line-clamp-4">
          Comprehensive Assignment Assistance With a No-AI Guarantee!
        </p>
      </div>
      {/* <div className="px-10 pt-10 text-center">
        <h1 className="font-bold text-6xl py-7">Sample Projects</h1>
        <p className="text-lg line-clamp-4">
          Comprehensive Assignment Assistance With a No-AI Guarantee!
        </p>
      </div> */}
      <div className="pb-14 lg:px-10 md:px-8 px-5">
        <h2 className="font-bold py-7 text-4xl text-white mx-10 border-b border-gray-400">
          {/* All Services */}
        </h2>
        <div className="grid px-10 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {samples.length > 0 &&
            samples.map((sample) => (
              <SampleComponent key={sample.id} sample={sample} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Sample;
