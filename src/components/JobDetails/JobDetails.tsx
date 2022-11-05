import { Link } from "react-router-dom";

export const JobDetails = (props: any) => {
  return (
    <div className="w-screen flex md:flex-col justify-center px-8 bg-white">
      <div className="max-w-[720px] w-full ">
        <header className="relative flex justify-between items-center text-dark mt-[56px] mb-[50px] md:mb-[90px] after:absolute after:content[''] after:bottom-[-7px] after:left-0 after:w-full after:h-[2px] after:bg-dark after:opacity-[.13]">
          <h2 className="relative font-bold text-[28px] ">Job Details</h2>
          <div className="flex items-center gap-[30px] md:absolute md:left-0 md:top-[65px]">
            <button className="relative flex justify-center items-center h-8 pl-8 before:absolute before:top-[4px] before:left-0 before:content-bookmarkIcon">
              Save to my list
            </button>
            <button className="relative flex justify-center items-center h-8 pl-8 before:absolute before:top-[4px] before:left-0 before:content-bookmarkIcon">
              Share
            </button>
          </div>
        </header>
        <main>
          <button className="applyButton">Apply Now</button>
          <section className="flex justify-between items-start mt-8">
            <h2 className="w-[70%] text-dark font-bold text-2xl">{props.state.selected.title}</h2>
            <div>
              <span className="font-bold text-dark text-xl">{props.state.selected.salary} €</span>
              <br />
              Brutto, per year
            </div>
          </section>
          <div className="text-lg text-[#38415d] opacity-[.3] my-[7px]">
            Posted {new Date().getFullYear() - new Date(props.state.selected.createdAt).getFullYear()} years ago
          </div>
          <section>
            <div className="text-lg">{props.state.selected.description}</div>
            <button className="applyButton my-[25px]">Apply Now</button>
          </section>
          <section>
            <h2 className="secondaryTitle">Additional info</h2>
            <div className="additionalInfo">Employment Type</div>
            <div className="flex justify-start items-center gap-2">
              {props.state.selected.employment_type.map((type: string, idx: number) => (
                <div key={idx} className="listItemBlue">
                  {type}
                </div>
              ))}
            </div>
            <div className="additionalInfo">Benefits</div>
            <div className="flex justify-start items-center gap-2">
              {props.state.selected.benefits.map((benefit: string, idx: number) => (
                <div key={idx} className="listItemYellow">
                  {benefit}
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="secondaryTitle mb-[26px]">Attached Images</h2>
            <div className="flex items-center gap-[15px] md:pb-5 md:overflow-x-scroll">
              {props.state.selected.pictures.map((picture: string, idx: number) => (
                <img key={idx} className="rounded-lg" src={picture} alt="picture" />
              ))}
            </div>
          </section>
          <section className="hidden md:block">
            <h2 className="secondaryTitle">Contacts</h2>
          </section>
          <Link to="/">
            <button className="relative w-[210px] bg-lightBg text-xs text-center font-semibold text-dark uppercase py-4 pl-[52px] pr-[26px] whitespace-nowrap rounded-lg mt-[90px] mb-40 ml-[-80px] before:absolute before:content-bigArrowIcon before:left-[23px] before:top-[14px] md:hidden">
              Return to job board
            </button>
          </Link>
        </main>
      </div>
      <div className="relative flex flex-col gap-1 items-start px-[60px] pt-[30px] ml-[135px] md:ml-0 mt-[60px] md:my-8 bg-[#2A3047] max-w-[400px] w-full h-[400px] before:absolute  before:content-mapImage before:left-0 before:top-[-30px] overflow-hidden rounded-lg after:absolute after:content-largeLocationIcon after:bottom-[115px] after:left-[75px]">
        <h2 className="relative z-2 font-bold text-xl text-[#E7EAF0]">{props.state.selected.name}</h2>
        <span className="relative text-lg text-lightgray z-2 before:content-smallLocationIcon before:mr-[5px] before:relative before:top-[2px]">
          {props.state.selected.address}
        </span>
        <span className="contactInfo">{props.state.selected.phone}</span>
        <span className="contactInfo">{props.state.selected.email}</span>
      </div>
    </div>
  );
};
