import Link from 'next/link';

const Courses = ({ courses }) => {
  return (
    <div className="courses">
      {courses.map((course) => (
        <div className="card" key={course.id}>
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} target="_blank" className="btn">
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Courses;
