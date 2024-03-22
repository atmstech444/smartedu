export const CourseDescriptionTitleInput: React.FC = () => {
    return (
      <div className="mt-8">
        <h1 className="text-dark text-xl font-normal">დაამატე აღწერის სათაური</h1>
        <input
          id="courseDescriptionTitleInput"
          type="text"
          placeholder="კურსის აღწერის სათაური"
          className="border border-[#DCDCDC] rounded-[30px] px-3 py-1 mt-4 text-start outline-none w-full"
        />
      </div>
    );
  };
  