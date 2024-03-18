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
import { API_ADMIN_STORAGE, API_STORAGE } from "@/api/API_PATH";
import SecondLoadingSpinner from "@/components/LoadingSpinner";
import { editVideoTitle } from "../services/editVideoTitle";

interface Video {
  id: number;
  video: string;
  title: string;
  lecture_videos?: any;
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
  const [title, setTitle] = useState<string>("");
  const [videosData, setVideosData] = useState<Video[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadPercentage, setUploadPercentage] = useState<number>(0);
  const [totalSizeUploaded, setTotalSizeUploaded] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  const [editingVideoId, setEditingVideoId] = useState<number | null>(null);
  const [newVideoTitle, setNewVideoTitle] = useState<string>("");

  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];
    setVideoFile(file);
  };

  const handleVideoupload = async () => {
    if (!title.trim()) {
      Swal.fire({
        icon: "warning",
        title: "გთხოვთ შეიყვანეთ სათაური",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    if (!videoFile) {
      Swal.fire({
        icon: "warning",
        title: "გთხოვთ ატვირთეთ ვიდეო",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    setIsModalOpen(false);
    const formData = new FormData();
    formData.append("video", videoFile);
    formData.append("title", title);

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
        setIsLoading(true);
        const response = await getAllVideos(token, lectureId);
        console.log(response);
        setVideosData(response.lecture_videos);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
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

  const updateLecture = async (videoId: number, newVideoTitle: string) => {
    try {
      const response = await editVideoTitle(token, { title: newVideoTitle }, videoId);
      if (response.message === "Video title change successfully") {
        setVideosData((prevVideos) => prevVideos.map((video) => (video.id === videoId ? { ...video, title: newVideoTitle } : video)));
        Swal.fire({
          icon: "success",
          title: response.message,
          showConfirmButton: true,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: response.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("An unexpected error occurred", error);
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

        {isLoading ? (
          <div className="flex flex-col gap-3 mt-10 w-28 items-center">
            <SecondLoadingSpinner />
            <p>იტვირთება...</p>
          </div>
        ) : videosData.length > 0 ? (
          <div className="flex gap-4 mt-4 flex-wrap mb-5">
            {videosData.map((video) => (
              <div key={video.id} className="w-[400px] p-2 flex flex-col gap-2 items-start border border-1-[#D1D1D1] rounded-md">
                {editingVideoId === video.id ? (
                  <div className="flex justify-between w-full items-center">
                    <div className="flex gap-3 items-center">
                      <h1 className="text-lg font-bold">სათაური:</h1>
                      <input
                        type="text"
                        value={newVideoTitle}
                        className="w-[150px] border border-black rounded-md p-1"
                        placeholder={video.title}
                        onChange={(e) => setNewVideoTitle(e.target.value)}
                        onBlur={() => {
                          setEditingVideoId(null);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            updateLecture(video.id, newVideoTitle);
                            setEditingVideoId(null);
                          }
                        }}
                      />
                    </div>

                    <div className="flex gap-2 items-center">
                      <p
                        className="cursor-pointer"
                        onClick={() => {
                          if (editingVideoId === video.id) {
                            setEditingVideoId(null);
                          } else {
                            setEditingVideoId(video.id);
                            setNewVideoTitle(video.title);
                          }
                        }}
                      >
                        გაუქმება
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-center w-full">
                    <h1>
                      <span className="text-lg font-bold">სათაური:</span> {video.title}
                    </h1>

                    <Image
                      src={"/assets/img/admin/pencil.png"}
                      width={20}
                      height={20}
                      alt={""}
                      className="cursor-pointer"
                      onClick={() => {
                        if (editingVideoId === video.id) {
                          setEditingVideoId(null);
                        } else {
                          setEditingVideoId(video.id);
                          setNewVideoTitle(video.title);
                        }
                      }}
                    />
                  </div>
                )}

                {video && (
                  <video controls className="rounded-lg">
                    <source src={`${API_ADMIN_STORAGE}${video.video}`} type="video/mp4" />
                  </video>
                )}
                <button className="text-white bg-[#2FA8FF] py-2 px-2 w-[150px] rounded-lg" onClick={() => handleDeleteVideoFromData(video.id)}>
                  წაშლა
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-7">ვიდეოები არ არის დამატებული</p>
        )}

        {uploading && <LoadingSpinner uploadPercentage={uploadPercentage} totalSizeUploaded={totalSizeUploaded} />}
      </div>

      {isModalOpen && (
        <VideoUploadModal closeModal={() => setIsModalOpen(false)} handleFileInputChange={handleFileInputChange} handleVideoupload={handleVideoupload} videoFile={videoFile} handleDeleteVideo={handleDeleteVideo} title={title} setTitle={setTitle} />
      )}
    </div>
  );
};

export default VideoUpload;
