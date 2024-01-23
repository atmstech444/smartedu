import UsersIdContent from "./components/UsersIdContent";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

const page = () => {
  return <UsersIdContent />;
};

export default page;
