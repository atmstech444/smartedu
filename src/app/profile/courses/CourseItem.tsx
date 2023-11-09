import Link from "next/link";
import Image from "next/image";

export default function CourseItem() {
  const item = {
    id: 58236585,
    image: "https://picsum.photos/250/150",
    categoryClass: "Web Development",
    category: "Front-end",
    title: "Introduction to React",
    lesson: 30,
    ratingAve: 5.4,
    ratingCount: 498,
    tutorImg: "https://picsum.photos/200/200",
    author: "John Doe",
    price: 19.99,
    oldPrice: 29.99,
    priceClass: "price",
  };

  return (
    <div key={item.id} style={{width:'250px', marginInline:'auto'}}>
      <div className="course__item white-bg mb-30 fix">
        <div className="course__thumb w-img p-relative fix">
          <Link href={`/course-details/${item.id}`}>
            <Image src={item.image} width={250} height={150} alt="image not found" />
          </Link>
          <div className="course__tag">
            <Link href={`/course-details/${item.id}`} className={item.categoryClass ? `${item.categoryClass}` : ""}>
              {item.category}
            </Link>
          </div>
        </div>
        <div className="course__content">
          <div className="course__meta d-flex align-items-center justify-content-between">
            <div className="course__lesson">
              <span>
                <i className="far fa-book-alt"></i>
                {item.lesson} Lesson
              </span>
            </div>
            <div className="course__rating">
              <span>
                <i className="fas fa-star"></i>
                {item.ratingAve} ({item.ratingCount})
              </span>
            </div>
          </div>
          <h3 className="course__title">
            <Link href={`/course-details/${item.id}`}>{item.title}</Link>
          </h3>
          <div className="course__teacher d-flex align-items-center">
            <div className="course__teacher-thumb mr-15">
              <Image src={item.tutorImg} width={200} height={300} alt="image not found" />
            </div>
            <h6>
              <Link href="/instructor-details">{item.author}</Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
