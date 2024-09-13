import { useState, useEffect } from "react";
import { fetchAllBusiness, fetchBusinessById } from "@/data/api";
import { bisnisType } from "@/data/type";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Image from "next/image";
// import { Rating } from "@mui/material";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { Skeleton } from "../ui/skeleton";

interface bisnisDetailProps {
  filter: string[];
  data: bisnisType[];
}

const BusinessAccordion: React.FC<bisnisDetailProps> = ({filter,data}) => {
  
  const [selectedBusiness, setSelectedBusiness] = useState<bisnisType>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingBusinessDetails, setLoadingBusinessDetails] = useState<boolean>(false);
  
  const {push} = useRouter();
  
  const filteredItems = data.filter(
    (item) =>
      filter.length === 0 ||
      filter.some((f) => item.category.toLowerCase().includes(f.toLowerCase()))
  );
  const handleBusinessChange = async (businessId: string) => {
    setLoadingBusinessDetails(true);
    try {
      const businessData = await fetchBusinessById(businessId, "");
      setSelectedBusiness(businessData);
    } catch (err) {
      setError("Failed to load business details");
    } finally {
      setLoadingBusinessDetails(false);
    }
  };

  const handleBusinessClick = (id: string) => {
    push(`/detail-bisnis-other-user/${id}`);
  };

  const handleProfileClick = () => {
    const { owner_info } = selectedBusiness || {};
    const { user_id } = owner_info || {};
    if (user_id) {
      push(`/profile-other-user/${user_id}`);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="hidden mq825:block"> 
          <div className="flex flex-col justify-center items-start gap-2 rounded-2xl w-full h-32 px-5 border-2">
            <Skeleton className="rounded-2xl w-full h-7" />
            <Skeleton className="rounded-2xl w-1/2 h-7" />
          </div>
        </div>
      ) : (
        <Accordion
          type="single"
          collapsible
          onValueChange={handleBusinessChange}
          className="hidden mq825:block"
        >
          {filteredItems.map(({ id, name, category }) => (
            <AccordionItem key={id} value={id}>
              <AccordionTrigger>
                <div className="flex flex-col items-start rounded-2xl">
                  <h3 className="text-xl font-bold text-left">{name}</h3>
                  <p className="w-fit h-fit font-normal text-[16px] md:text-[14px] text-b-two">
                    #{category}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {loadingBusinessDetails && selectedBusiness?.id === id ? (
                  <div className="w-full h-fit bg-w-two rounded-xl flex flex-col space-y-4 p-7">
                    <Skeleton className="w-full h-[40vh] rounded-2xl" />
                    <Skeleton className="w-1/3 h-5 rounded-2xl" />
                    <Skeleton className="w-1/2 h-5 rounded-2xl" />
                    <Skeleton className="w-full h-20 rounded-2xl" />
                  </div>
                ) : selectedBusiness?.id === id ? (
                  <div className="w-full h-fit bg-w-two rounded-xl flex flex-col space-y-4 p-7">
                    <div className="flex justify-between items-center pb-5">
                      <div className="flex gap-1 items-start">
                        <Image
                          src={
                            selectedBusiness.owner_info.photo_url ||
                            "/default-gray-photo.webp"
                          }
                          alt="user-profile"
                          width={50}
                          height={50}
                          className="rounded-full w-[50px] h-[50px] object-scale-down border-blue-500 border-4 hover:cursor-pointer"
                          onClick={handleProfileClick}
                        />
                        <div
                          className="flex gap-1 justify-center">
                        </div>
                        <div className="flex flex-col justify-start">
                          <h2 className="text-xl font-normal text-b-two">
                            {selectedBusiness.owner_info.fullname}
                          </h2>
                          <div className="flex gap-2 items-center">
                            <p className="text-xs text-gray-800 font-semibold">
                              Recommended Business
                            </p>
                            <RiVerifiedBadgeFill className="text-blue-500" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3" onClick={() => handleBusinessClick(selectedBusiness.id)}>
                      <Image
                        src={
                          selectedBusiness.photo_url ||
                          "/empty-business-image.png"
                        }
                        alt="business"
                        width={425}
                        height={971}
                        className="w-full h-[40vh] max-w-full object-fill rounded-2xl pb-5"
                      />
                      <div className="flex flex-col gap-3">
                        <h1 className="text-xl font-extrabold">
                          {selectedBusiness.name}
                        </h1>
                        {/* <div className="flex gap-3 items-center">
                          <Rating
                            name="size-small"
                            defaultValue={selectedBusiness.avg_rating}
                            readOnly
                          />
                          <p className="text-sm font-bold">
                            {selectedBusiness.total_rater} pengulas
                          </p>
                        </div> */}
                        <div className="flex gap-3 flex-wrap pb-5">
                          <p className="w-fit h-fit font-normal text-[16px] md:text-[14px] text-b-two border-[1px] border-b-two rounded-full py-2 px-4">
                            {selectedBusiness.category}
                          </p>
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: (selectedBusiness?.description_list?.join("\n") || "").replace(/\n/g, "<br><br>") }} className="text-sm font-normal text-justify"/>
                      </div>
                    </div>
                  </div>
                ) : null}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default BusinessAccordion;
