import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import classes from "./work-history.module.css";
import WorkHistoryCard from "./work-history-card";

import work1 from "../../assets/images/work-1.png";
import work2 from "../../assets/images/work-2.png";
import work3 from "../../assets/images/work-3.png";

const WorkHistory = () => {
  return (
    <div className={`${classes["work-history"]} container`}>
      <div className={classes["work-his-heading-wrapper"]}>
        <h1 className={classes["history-heading"]}>My Working History</h1>
        <div className={classes["divider"]}></div>
        <p className={classes["history-desc"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          dapibus leo vel augue suscipit bibendum.
        </p>
      </div>

      <div className={classes["work-history-card-wrapper"]}>
        <WorkHistoryCard
          isCurrent={true}
          img={work1}
          time="CURRENTLY WORKING"
          title="Singapore General Hospital"
          desc="Donec ut imperdiet augue, ac rhoncus arcu. In ac mauris commodo, ultrices felis vitae, tempor eros."
        />
        <WorkHistoryCard
          img={work2}
          time="Jan,2019 to March,2021"
          title="University of Tokyo Hospital"
          desc="Donec ut imperdiet augue, ac rhoncus arcu. In ac mauris commodo, ultrices felis vitae, tempor eros."
        />
        <WorkHistoryCard
          img={work3}
          time="Mar,2017 to Dec,2018"
          title="Johns Hopkins Hospital"
          desc="Donec ut imperdiet augue, ac rhoncus arcu. In ac mauris commodo, ultrices felis vitae, tempor eros."
        />
      </div>

      <div className={classes["work-history-arrow-wrapper"]}>
        <button>
          <GoArrowLeft />
        </button>
        <button>
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default WorkHistory;
