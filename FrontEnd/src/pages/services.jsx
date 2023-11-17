import { services } from "../assets/data/services";
import ServicesCard from "../components/services/servicesCard";

function Services() {
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]">
            {services.map((item, index) => {
              return <ServicesCard item={item} index={index} key={index} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
