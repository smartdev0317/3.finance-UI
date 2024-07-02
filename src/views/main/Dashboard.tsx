import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";

import classNames from "classnames";

import { RootState } from "store/store";
import {
  updateRightNavbarShow,
  updateRightNavbarTabSelected,
  updateRightNavbarSubTabSelected,
  // updateLeftNavbarGrid,
  // updateBodyContentGrid,
} from "store/actions/navbarAction";

import ArrowRight from "assets/images/arrow-right.png";

import DashboardTVL from "components/main/Dashboard/DashboardTVL";
import { useEffect } from "react";

export default function Dashboard() {
  const dispatch: Dispatch<any> = useDispatch();
  const walletConnected = useSelector(
    (state: RootState) => state.global.walletConnected
  );
  const leftNavbarShow = useSelector(
    (state: RootState) => state.navbar.leftNavbarShow
  );
  const rightNavbarShow = useSelector(
    (state: RootState) => state.navbar.rightNavbarShow
  );
  // useEffect(() => {
  //   switch (leftNavbarShow) {
  //     case "Opened":
  //       dispatch(updateLeftNavbarGrid(4));
  //       dispatch(updateBodyContentGrid(8));
  //       break;
  //     case "Collapsed":
  //       dispatch(updateLeftNavbarGrid(1));
  //       dispatch(updateBodyContentGrid(10));
  //       break;
  //     case "Minimized":
  //       switch (rightNavbarShow) {
  //         case "Opened":
  //           dispatch(updateLeftNavbarGrid(1));
  //           dispatch(updateBodyContentGrid(8));
  //           break;
  //         case "Minimized":
  //           dispatch(updateLeftNavbarGrid(1));
  //           dispatch(updateBodyContentGrid(10));
  //           break;
  //       }
  //       break;
  //   }
  // }, []);
  return (
    <div
      className={classNames(
        "Dashboard p-[10px] w-full top-animation",
        rightNavbarShow === "Opened"
          ? "mx-[10px] md:mx-[30px]"
          : leftNavbarShow === "Opened"
          ? "ml-[10px] md:ml-[30px] mr-[10px] md:mr-[70px] text-[10px]"
          : "mx-[10px] md:mx-[70px] text-[10px]"
      )}
    >
      <div className="flex justify-between">
        <h1>Dashboard</h1>
        {walletConnected === "Connected" && (
          <p
            className="flex items-center text-[#00FFF0] text-[14px] cursor-pointer mb-[0px] md:mb-[10px] xl:mb-[10px] 2xl:mb-[10px] 3xl:mb-[10px]"
            onClick={() => {
              dispatch(updateRightNavbarTabSelected("Settings"));
              dispatch(updateRightNavbarSubTabSelected("Help"));
              dispatch(updateRightNavbarShow("Opened"));
              // dispatch(updateLeftNavbarGrid(1));
              // dispatch(updateBodyContentGrid(8));
            }}
          >
            Settings
            <img
              loading="lazy"
              src={ArrowRight}
              className="w-[14px] h-[12px] ml-[5px]"
              alt=""
            />
          </p>
        )}
      </div>
      <hr className="mb-[30px]" />
      <DashboardTVL />
    </div>
  );
}
