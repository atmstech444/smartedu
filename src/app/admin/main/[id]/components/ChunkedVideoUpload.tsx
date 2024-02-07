import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { parseCookies } from "nookies";

const ChunkedVideoUpload = ({ videoFile, handleDeleteVideo, handleFileInputChange }: any) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const chunkSize = 100 * 1024 * 1024;
  const cookies = parseCookies();
  const token = cookies.authToken;

  const uploadChunks = async (file: any) => {
    let delay = 1000;
    const totalChunks = Math.ceil(file.size / chunkSize);

    for (let i = 0; i < totalChunks; i++) {
      const start = i * chunkSize;
      console.log(start);
      const end = Math.min(file.size, start + chunkSize);
      const chunk = file.slice(start, end);

      const formData = new FormData();
      formData.append("chunkData", chunk);
      formData.append("chunkNumber", String(i + 1));
      formData.append("totalChunks", String(totalChunks));

      try {
        await axios.post(
          `http://192.168.96.66:8000/admin/course-lecture-video/138`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(`Chunk ${i + 1} uploaded successfully`);
      } catch (error: any) {
        console.error(error);
        if (error.response && error.response.status === 429) {
          await new Promise((resolve) => setTimeout(resolve, delay));
          delay *= 2;
          i--;
        } else {
          break;
        }
      }
    }
  };

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (selectedFile) {
      await uploadChunks(selectedFile);
    }
  };

  return (
    <div>
      <button onClick={handleSubmit}>Upload</button>

      <div className="flex flex-col gap-3 cursor-pointer w-[145px]">
        <h1>ვიდეო</h1>
        <label className="flex flex-col items-center gap-[6px] pt-3 pb-[6px] px-4 bg-[#EEE] rounded-lg w-36 cursor-pointer">
          <Image src="/assets/img/admin/AddVideo.png" alt={""} width={25} height={27} />
          <p className="text-xs text-[#CACACA] font-medium">ვიდეოს ატვირთვა</p>
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>
      </div>
    </div>
  );
};

export default ChunkedVideoUpload;
