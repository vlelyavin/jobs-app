import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CHANGE_LOADING_STATUS, SET_JOBS, SET_SELECTED_JOB } from "../../actions/mainActions";
import { Loader } from "../Loader";
import arrowLeftIcon from "../../icons/arrow-left.png";
import arrowRightIcon from "../../icons/arrow-right.png";
import separatorIcon from "../../icons/separator.png";

export const JobList = (props: any) => {
  const access_token: string = `wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`;

  useEffect(() => {
    const getJobs = async () => {
      const response = await fetch(
        `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=${access_token}`
      );
      if (!response.ok) throw new Error("Data couldn't be fetched");
      const result: JSON = await response.json();
      props.dispatch({ type: SET_JOBS, payload: result });
      props.dispatch({ type: CHANGE_LOADING_STATUS, payload: true });
    };
    getJobs();
  }, []);

  const handleClick = (job: object) => {
    sessionStorage.setItem("selected", JSON.stringify(job));
    props.dispatch({
      type: SET_SELECTED_JOB,
      payload: job,
    });
  };

  return (
    <section className="flex flex-col items-center w-screen gap-2 pt-8 pb-20 px-4">
      {props.state.loaded ? (
        props.state.jobs.map((job: any, idx: number) => (
          <div
            className="relative flex max-w-[1400px] w-full bg-white md:bg-lightBg py-6 px-4 md:pt-11 rounded-lg shadow-job-shadow pr-8 before:absolute before:content-bookmarkIcon md:before:content-ratingIcon before:top-7 before:right-6 md:before:top-[12px] md:before:left-[125px]"
            key={idx}
          >
            <img className="rounded-full w-20 h-20 mr-7 flex-none" src={job.pictures[0]} alt="icon" />
            <div className="relative w-2/3 flex flex-col gap-2">
              <Link to="/details" onClick={() => handleClick(job)}>
                <h2 className="font-bold text-xl text-dark">{job.title}</h2>
              </Link>
              <span className="tracking-wide">{job.name + " • " + job.address}</span>
              <span className="before:absolute before:content-locationIcon before:left-0 before:w-[13px] before:h-[18px] ml-5">
                Carolina, US
              </span>
            </div>
            <span className="absolute right-4 bottom-6 md:top-[13px] md:right-4">
              Posted {new Date().getFullYear() - new Date(job.createdAt).getFullYear()} years ago
            </span>
          </div>
        ))
      ) : (
        <Loader />
      )}
      <div className="relative flex items-center justify-between w-[515px] md:w-[400px] bg-white md:bg-paginationMobile py-2 shadow-job-shadow rounded-[10px] md:rounded-[8px] mt-10 px-[23px]">
        <button>
          <img src={arrowLeftIcon} alt="arrow-left" />
        </button>
        <img src={separatorIcon} alt="separator" />
        <ul className="flex justify-center w-[70%] font-bold text-xl">
          <li className="w-7">
            <button>1</button>
          </li>
          <li className="w-7 relative text-bright after:absolute after:content-[''] after:bottom-[-10px] after:left-[-10px] after:bg-bright after:w-[30px] after:h-[2px]">
            <button>2</button>
          </li>
          <li className="w-7">
            <button>3</button>
          </li>
          <li className="w-7">
            <button>4</button>
          </li>
          <li className="w-7">
            <button>5</button>
          </li>
          <li className="w-7">
            <button>...</button>
          </li>
          <li className="w-7">
            <button>18</button>
          </li>
        </ul>
        <img src={separatorIcon} alt="separator" />
        <button>
          <img src={arrowRightIcon} alt="arrow-right" />
        </button>
      </div>
    </section>
  );
};
