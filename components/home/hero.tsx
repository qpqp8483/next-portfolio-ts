import Link from "next/link";
import React, { FC } from "react";
import Animation from "./animation";

const hero: FC = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          프론트엔드 개발자
          <br className="hidden lg:inline-block" />
          장찬우 입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          3년간 퍼블리셔로 근무하다가 프론트엔드 개발자라는 직군으로 탈바꿈
          하고자 열심히 공부하고 발전해나가고 있습니다. <br /> &#39;기본&#39;에
          무너지지않고 &#39;근본&#39;적인 문제해결을 하고 싶어합니다. <br />
          배움에 목말라있는 프론트엔드 개발자 장찬우입니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" legacyBehavior>
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
};

export default hero;
