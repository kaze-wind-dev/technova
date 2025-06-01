
import type { Service } from "@/libs/utiles";

import ServiceCard from "../ServiceCard/page";

type Props = {
  services: Service[];
};
const ServiceList = ({services}:Props)=>{
    return(
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {
          //　最新3件を取得
            services.slice(0, 3).map((service, index)=>(
                <ServiceCard service={service} key={index}/>
            ))
        }
    </ul>
    );
}
export default ServiceList;
