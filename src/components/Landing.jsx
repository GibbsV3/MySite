import React, { useState, useEffect } from "react";
import mountain from "./images/mountains.jpg";
const preloadSrcList = [mountain];

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
      resolve(img);
    };
    img.onerror = img.onabort = function () {
      reject(src);
    };
    img.src = src;
  });
}

function Landing() {
  const [fadeTitle, setfadeTitle] = useState("hidden");
  const [fadeDesc, setfadeDesc] = useState("textHidden");
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  useEffect(() => {
    let isCancelled = false;
    async function effect() {
      if (isCancelled) {
        return;
      }
      let imagesPromiseList = [];
      for (const i of preloadSrcList) {
        imagesPromiseList.push(preloadImage(i));
      }
      await Promise.all(imagesPromiseList);
      if (isCancelled) {
        return;
      }
      setAssetsLoaded(true);
    }
    effect();
    const titleTimer = setTimeout(() => {
      setfadeTitle("fade-in");
    }, 1000);
    const descTimer = setTimeout(() => {
      setfadeDesc("expanded");
    }, 1500);
    return () => {
      isCancelled = true;
      clearTimeout(titleTimer);
      clearTimeout(descTimer);
    };
  });

  return (
    <div
      className="col-12"
      id="landing"
      // style={{
      //   backgroundImage: 'url(${Background})',
      //   backgroundSize: "100%",
      // }}
    >
      {assetsLoaded ? (
        <div>
          <img
            className="landingBackground"
            src={mountain}
            alt="mountain"
          ></img>
          <div className="text">
            <h1 className={fadeTitle}>I'm Nidhish</h1>
            <div className={fadeDesc}>
              <p>
                {/* NEED TO CHANGE INLINE CSS TO STYLESHEET */}
                an <span style={{ color: "#FFC978" }}>aspiring</span> software
                engineer
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading Assets</p>
      )}
    </div>
  );
}
export default Landing;
