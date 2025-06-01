import type { Service } from "@/libs/utiles";

import MoreBtn from "../MoreBtn";

type Props = {
  service: Service;
};

const ServiceCard = ({ service }: Props) => {
  return (
    <li>
      <div className="bg-gray aspect-[8/5] w-full mb-4 lg:mb-5">
        {/* <img src="" alt="" /> */}
      </div>
      
      <h3 className="text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] tracking-wider leading-normal mb-2 lg:mb-3 font-bold">
        {service.title}
      </h3>
      <p className="leading-loose mb-3 lg:mb-4 line-clamp-2">{service.description}</p>
      <MoreBtn href={`/services/${service.id}`} />
    </li>
  );
};

export default ServiceCard;
