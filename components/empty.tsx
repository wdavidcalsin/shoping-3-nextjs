import React from "react";
import style from "../styles/module/page/like.module.scss";

interface EmptyI {
   img: string;
}

const Empty = (props: EmptyI) => {
   return (
      <div className={style.likePage}>
         <img src={props.img} alt="" />
         <span>Empty...</span>
      </div>
   );
};

export default Empty;
