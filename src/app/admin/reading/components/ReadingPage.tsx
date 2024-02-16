import React from "react";

const ReadingPage = ({ readingsData }: any) => {
  if (!readingsData || readingsData.length === 0) {
    return (
      <div className="flex flex-col gap-6">
        <h2 className="text-black font-bold text-xl">წასაკითხი მასალა</h2>
        <p className="text-black">წასაკითხი მასალა არ არის ატვირთული</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-black font-bold text-xl">წასაკითხი მასალა</h2>
      {readingsData.map(
        (
          reading: { description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; url: any[] },
          index: React.Key | null | undefined
        ) => (
          <div key={index} className="flex flex-col gap-6">
            <h3 className="font-normal text-base text-black">{reading.description}</h3>
            <ul>
              {reading.url.map((url, urlIndex) => (
                <li key={urlIndex}>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="text-[#006CFA] font-normal text-base">
                    {url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default ReadingPage;
