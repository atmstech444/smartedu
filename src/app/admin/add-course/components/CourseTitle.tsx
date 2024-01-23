export const CourseTitleInput: React.FC = () => {
    return (
      <div>
        <h1 className="text-dark text-xl font-normal">დაამატე კურსი</h1>
        <input
          id="courseTitle"
          type="text"
          placeholder="კურსის დასახელება"
          className="border border-[#DCDCDC] rounded-[30px] px-3 py-1 mt-4 text-start outline-none w-full"
        />
      </div>
    );
  };
  