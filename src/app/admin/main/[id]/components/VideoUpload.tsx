import React, { useEffect, useState } from "react";
import Image from "next/image";
import { addlectureTitleAndDescription } from "../services/addlectureTitleAndDescription";
import { parseCookies } from "nookies";
import Swal from "sweetalert2";
import { addLecture } from "../../services/addLecture";
import { getAllVideos } from "../../services/getAllVideos";
import LoadingSpinner from "./LoadingSpinner";
import { deleteVideo } from "../services/deleteVideo";
import ChunkedVideoUpload from "./ChunkedVideoUpload";
import LectureTitleAndDescription from "./LectureTitleAndDescription";
import VideoUploadModal from "./VideoUploadModal";

interface Video {
  id: number;
  video: string;
}

const useQueryParams = () => {
  const [lectureId, setLectureId] = useState<string | undefined | null>(undefined);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("lectureId");
    setLectureId(id);
  }, []);

  return lectureId;
};

const VideoUpload = () => {
  const cookies = parseCookies();
  const token = cookies.authToken;
  const lectureId = useQueryParams();
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videosData, setVideosData] = useState<Video[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadPercentage, setUploadPercentage] = useState<number>(0);
  const [totalSizeUploaded, setTotalSizeUploaded] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];
    setVideoFile(file);
  };

  const handleVideoupload = async () => {
    if (!videoFile) {
      return;
    }
    setIsModalOpen(false);
    const formData = new FormData();
    formData.append("video", videoFile);

    try {
      setUploading(true);
      const response = await addLecture(token, formData, lectureId, (progressEvent) => {
        const { loaded, total } = progressEvent;
        const percentage = Math.round((loaded * 100) / (total ?? 1));
        setUploadPercentage(percentage);
        setTotalSizeUploaded(loaded);
      });
      if (response.message === "Video uploaded successfully") {
        setIsModalOpen(false);
        Swal.fire({
          icon: "success",
          title: response.message,
          showConfirmButton: true,
          timer: 1500,
        });
        fetchData();
      } else {
        setIsModalOpen(true);
        console.error("An unexpected error occurred");
        Swal.fire({
          icon: "warning",
          title: response.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false);
      setUploadPercentage(0);
      setTotalSizeUploaded(0);
    }
  };

  const handleDeleteVideo = () => {
    setVideoFile(null);
  };

  const fetchData = async () => {
    try {
      if (lectureId !== undefined) {
        const response = await getAllVideos(token, lectureId);
        setVideosData(response.lecture_videos);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [lectureId]);

  const handleDeleteVideoFromData = async (idToDelete: any) => {
    try {
      const response = await deleteVideo(token, idToDelete);
      if (response.message === "video remove successfully") {
        const updatedVideosData = videosData.filter((video) => video.id !== idToDelete);
        setVideosData(updatedVideosData);
        Swal.fire({
          icon: "success",
          title: response.message,
          showConfirmButton: true,
          timer: 1500,
        });
      } else {
        console.error("An unexpected error occurred");
        Swal.fire({
          icon: "warning",
          title: response.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };
  return (
    <div className="grid grid-cols-6 w-full">
      <div className="flex flex-col gap-3 col-span-5">
        <div className="flex flex-col gap-3 cursor-pointer w-[145px]">
          <h1>ვიდეო</h1>
          <label className="flex flex-col items-center gap-[6px] pt-3 pb-[6px] px-4 bg-[#EEE] rounded-lg w-36 cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <Image src="/assets/img/admin/AddVideo.png" alt={""} width={25} height={27} />
            <p className="text-xs text-[#CACACA] font-medium">ვიდეოს ატვირთვა</p>
          </label>
        </div>

        {videosData.length === 0 && (
          <div className="">
            <p>ვიდეოები არაა დამატებული</p>
          </div>
        )}

        {videosData.length > 0 && (
          <div className="flex gap-4 mt-4 flex-wrap mb-5">
            {videosData.map((video) => (
              <div key={video.id} className="w-[200px] flex flex-col gap-2 items-center">
                {videosData && (
                  <video controls className="rounded-lg">
                    <source src={`http://192.168.1.106:8000/${video?.video}`} type="video/mp4" />
                  </video>
                )}

                <button className="text-white bg-[#2FA8FF] py-1 px-1 rounded-lg" onClick={() => handleDeleteVideoFromData(video.id)}>
                  წაშლა
                </button>
              </div>
            ))}
          </div>
        )}

        {uploading && <LoadingSpinner uploadPercentage={uploadPercentage} totalSizeUploaded={totalSizeUploaded} />}
      </div>

      {isModalOpen && <VideoUploadModal closeModal={() => setIsModalOpen(false)} handleFileInputChange={handleFileInputChange} handleVideoupload={handleVideoupload} videoFile={videoFile} handleDeleteVideo={handleDeleteVideo} />}
    </div>
  );
};

export default VideoUpload;
